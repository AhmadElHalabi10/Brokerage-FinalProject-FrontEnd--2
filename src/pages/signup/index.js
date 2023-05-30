import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // const navigate = useNavigate();

  // const handleGoBack = () => {
  //   navigate("/");
  // };

  const goBack = () => {
    window.history.back();
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Reset error and success messages
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);

    try {
      // Make the Axios POST request
      const response = await axios.post("http://localhost:7000/auth/register", {
        userName,
        email,
        password,
        firstName,
        lastName,
      });

      // Handle the response if needed
      console.log(response.data);

      // Set success message and reset form
      setSubmitSuccess(true);
      setUserName("");
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
    } catch (error) {
      // Handle the error if needed
      console.error(error);
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup">
      <div className="signup-signupbox">
        <Link to="/contact" className="signup-signupbox-form-closeicon">
          <AiOutlineCloseCircle size={30} />
        </Link>
        <form className="signup-signupbox-form" onSubmit={handleSignUp}>
          <h1 className="signup-signupbox-title">Sign up</h1>
          <input
            type="text"
            placeholder="Username"
            className="signup-signupbox-input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="signup-signupbox-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-signupbox-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="First Name"
            className="signup-signupbox-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="signup-signupbox-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {submitError && <p className="signup-error-message">{submitError}</p>}
          {submitSuccess && (
            <p className="signup-success-message">Sign up successful!</p>
          )}
          <button
            type="submit"
            className="signup-signupbox-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
          <p className="signup-loginbox-haveaccount">
            Already have an account?
          </p>
          <div className="signup-signupbox-signin" onClick={goBack}>
            Sign in
          </div>
          <button className="signup-gobackbutton" onClick={goBack}>
            goBack
          </button>
        </form>
      </div>
    </div>
  );
}
