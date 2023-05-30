import React, { useState } from "react";
import axios from "axios";
import "./signin.css";

import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await axios.post("http://localhost:7000/auth/login", {
        userName: userName,
        password: password,
      });

      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data); // Detailed error response from the server
        console.log(error.response.status); // Status code
        console.log(error.response.headers); // Response headers
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }

      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signin">
      <div className="signin-signinbox">
        <form className="signin-signinbox-form">
          <Link to="/contact" className="signin-signinbox-form-closeicon">
            <AiOutlineCloseCircle size={30} />
          </Link>
          <div className="signin-signinbox-form-top">
            <h1 className="signin-signinbox-title">Sign in</h1>
          </div>
          <input
            type="text"
            placeholder="userName"
            className="signin-signinbox-input"
            value={userName}
            onChange={handleUserNameChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="signin-signinbox-input"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="submit"
            className="signin-signinbox-button"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>

          {submitError && (
            <p className="signin-signinbox-error">{submitError}</p>
          )}

          <p className="signin-signinbox-noaccount">Don't have an account?</p>
          <Link to="/signup" className="signin-signinbox-signup">
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
}
