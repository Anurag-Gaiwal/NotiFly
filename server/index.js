const express = require("express");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const host = process.env.DB_HOST;
const pass = process.env.DB_PASS;
const database = process.env.DB;
const user = process.env.DB_USER;

const con = mysql.createConnection({
  host: host,
  user: user,
  password: pass,
  database: database,
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

const senderEmail = process.env.SENDER_EMAIL;
const email_pass = process.env.NODEMAILER_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: senderEmail,
    pass: email_pass,
  },
});

app.post("/sub", (req, res) => {
  const { name, email } = req.body;

  // Check if email already exists
  let checkSql = "SELECT * FROM users WHERE email = ?";
  con.query(checkSql, [email], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    if (results.length > 0) {
      res.status(400).send("Already subscribed");
      return;
    }

    // Insert new subscription
    let insertSql = "INSERT INTO users (name, email) VALUES (?, ?)";
    con.query(insertSql, [name, email], (err, result) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      let mailOptions = {
        from: senderEmail,
        to: email,
        subject: `Thank you for subscribing ${name}`,
        text: `Hello ${name}, Thank you so much for subscribing to our service. We hope you'll have a good time with us.🤗`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send("Subscription successful");
        }
      });
    });
  });
});

app.delete("/unsub", (req, res) => {
  const { email } = req.body;

  // Check if email exists
  let checkSql = "SELECT * FROM users WHERE email = ?";
  con.query(checkSql, [email], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    if (results.length === 0) {
      res.status(400).send("Not subscribed");
      return;
    }

    // Delete subscription
    let deleteSql = "DELETE FROM users WHERE email = ?";
    con.query(deleteSql, [email], (err, result) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      let mailOptions = {
        from: senderEmail,
        to: email,
        subject: `Successfully Unsubscribed, Thank you`,
        text: `Hello ${email}, Thank you for experiencing our service. We hope you had a good time with us.🤗`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send("Unsubscription successful");
        }
      });
    });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
