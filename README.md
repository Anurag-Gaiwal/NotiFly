# 📧 Newsletter Subscription Service

A full-stack newsletter subscription application built with the MERN stack (MySQL, Express.js, React, Node.js) and Nodemailer. This app allows users to subscribe and unsubscribe from a newsletter and receive real-time notifications.

## 🚀 Features

- **Subscription & Unsubscription**: Users can easily subscribe/unsubscribe with their name and email.
- **Email Notifications**: Users receive confirmation emails on subscribing or unsubscribing via Nodemailer.
- **Real-time Feedback**: Integrated with `react-toastify` for instant user action feedback.
- **Secure Backend**: MySQL for database operations, ensuring secure and efficient handling of user data.
- **Responsive UI**: Built using React and styled with Tailwind CSS for a clean, responsive, and user-friendly experience.

## 🛠️ Technologies Used

- **Frontend**: React, Tailwind CSS, React Toastify
- **Backend**: Node.js, Express.js, MySQL, Nodemailer
- **Database**: MySQL

## ⚙️ Setup & Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/newsletter-subscription-service.git
    cd newsletter-subscription-service
    ```

2. **Install dependencies for both frontend and backend:**
    ```bash
    # Install frontend dependencies
    cd client
    npm install
    
    # Install backend dependencies
    cd ../server
    npm install
    ```

3. **Configure the environment variables:**

    Create a `.env` file in the root of the `server/` directory with the following:

    ```bash
    DB_HOST=your-mysql-host
    DB_USER=your-mysql-username
    DB_PASSWORD=your-mysql-password
    DB_NAME=your-mysql-database
    SMTP_HOST=your-smtp-host
    SMTP_PORT=your-smtp-port
    SMTP_USER=your-smtp-username
    SMTP_PASS=your-smtp-password
    ```

4. **Run the application:**
    ```bash
    # Run backend server
    cd server
    npm start
    
    # Run frontend client
    cd ../client
    npm start
    ```

5. **Access the app:**
   - Open the frontend in your browser at `http://localhost:3000`.
   - Backend server runs on `http://localhost:5000`.

## 💻 Screenshots

![Subscription Page](path/to/your/screenshot.png)
*Add any relevant screenshots here*

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📝 Acknowledgements

- Special thanks to Mernix Consulting for guidance and mentorship.
