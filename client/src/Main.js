import React, { useRef, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const rEmail = useRef();
  const rName = useRef();

  const handleSub = async (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      toast.warning("Name cannot be empty");
      setName("");
      rName.current.focus();
      return;
    }

    if (email.trim() === "") {
      toast.warning("Email cannot be empty");
      setEmail("");
      rEmail.current.focus();
      return;
    }

    let data = { email, name };
    let url = "https://newsletterserver-i0qj.onrender.com/sub";
    axios
      .post(url, data)
      .then((res) => {
        toast.success("Thank you for Subscribing");
        setName("");
        setEmail("");
        rName.current.focus();
      })
      .catch((err) => toast.error(err.response.data));
  };

  const handleUnsub = async (event) => {
    event.preventDefault();
    if (email.trim() === "") {
      toast.warning("Email cannot be empty");
      setEmail("");
      rEmail.current.focus();
      return;
    }

    let data = { email };
    let url = "https://newsletterserver-i0qj.onrender.com/unsub";
    axios
      .delete(url, { data })
      .then((res) => {
        toast.success("Unsubscribed, Thank you");
        setName("");
        setEmail("");
        rEmail.current.focus();
      })
      .catch((err) => toast.error(err.response.data));
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Subscribe to our Newsletter
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                ref={rName}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                ref={rEmail}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleSub}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
              <button
                onClick={handleUnsub}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Unsubscribe
              </button>
            </div>
          </form>
          <br />
        <footer>Made with ❤️ By Anurag Gaiwal</footer>
        </div>
      </div>
    </>
  );
};

export default Main;
