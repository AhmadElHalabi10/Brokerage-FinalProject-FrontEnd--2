import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SignUp() {
  // ...other code...
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const navigate = useNavigate();

  const goBack = () => {
    window.history.back();
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Reset error and success messages
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);

    // Perform validation logic here
    let hasErrors = false;

    if (formValues.userName === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: "Please enter a user name.",
      }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, userName: "" }));
    }

    if (formValues.email === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter an email.",
      }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (formValues.password === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Please enter a password.",
      }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }

    if (formValues.firstName === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "Please enter a first name.",
      }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
    }

    if (hasErrors) {
      return;
    }

    // Submit form if validation passes
    const formData = {
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
    };

    // Make the Axios POST request
    axios
      .post("https://almorad-app-api.onrender.com/auth/register", formData)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.errors) {
          const { email, firstName, lastName } = err.response.data.errors;
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: email ? "Email already exists." : "",
            firstName: firstName ? "First name already exists." : "",
            lastName: lastName ? "Last name already exists." : "",
            general: "", // Reset general error message if present
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            general:
              "An error occurred. Please try to change email or first name or last name", // Set a general error message
          }));
          console.log(err);
        }
      });
  };
  return (
    <div className="signup">
      <div className="signup-signupbox">
        <Link to="/contact" className="signup-signupbox-form-closeicon">
          <AiOutlineCloseCircle size={30} />
        </Link>
        <form className="signup-signupbox-form" onSubmit={handleSignUp}>
          <h1 className="signup-signupbox-title">Signup</h1>
          <input
            type="text"
            placeholder="UserName"
            className="signup-signupbox-input"
            value={formValues.userName}
            onChange={(event) =>
              setFormValues({ ...formValues, userName: event.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            className="signup-signupbox-input"
            value={formValues.email}
            onChange={(event) =>
              setFormValues({ ...formValues, email: event.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-signupbox-input"
            value={formValues.password}
            onChange={(event) =>
              setFormValues({ ...formValues, password: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="First Name"
            className="signup-signupbox-input"
            value={formValues.firstName}
            onChange={(event) =>
              setFormValues({ ...formValues, firstName: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            className="signup-signupbox-input"
            value={formValues.lastName}
            onChange={(event) =>
              setFormValues({ ...formValues, lastName: event.target.value })
            }
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
          <div className="signup-signupbox-container">
            <p className="signup-loginbox-haveaccount">
              Already have an account?
            </p>
            <div className="signup-signupbox-signin" onClick={goBack}>
              Login
            </div>
          </div>
          <button className="signup-gobackbutton" onClick={goBack}>
            goBack
          </button>
        </form>
      </div>
    </div>
  );
}
