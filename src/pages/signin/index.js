import React, { useState, useEffect } from "react";
import axios from "axios";
import "./signin.css";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    let hasErrors = false;

    if (formValues.userName === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: "Please enter a userName.",
      }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, userName: "" }));
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

    if (hasErrors) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/auth/login`,
        {
          userName: formValues.userName,
          password: formValues.password,
          role: formValues.role,
        }
      );

      const authToken = response.data.token;

      if (response.status === 201) {
        const expires = new Date();
        expires.setDate(expires.getDate() + 30);
        Cookies.set("token", authToken, { expires });
        Cookies.set("role", response.data.role, { expires });
        Cookies.set("userName", response.data.userName, { expires });
        console.log(Cookies.get("admin"));
      }

      if (response.data.role === "admin") {
        navigate("/");
      } else if (response.data.role === "superAdmin") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors) {
        const { userName } = err.response.data.errors;
        setErrors((prevErrors) => ({
          ...prevErrors,
          userName: userName ? "userName already exists." : "",
          general: "",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: "An error occurred. Please try again.",
        }));
        console.log(err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signin">
      <div className="signin-signinbox">
        <form className="signin-signinbox-form" onSubmit={handleSubmit}>
          <Link to="/contact" className="signin-signinbox-form-closeicon">
            <AiOutlineCloseCircle size={30} />
          </Link>
          <div className="signin-signinbox-form-top">
            <h1 className="signin-signinbox-title">Login</h1>
          </div>
          <input
            type="text"
            placeholder="userName"
            color="success"
            className="signin-signinbox-input"
            value={formValues.userName}
            onChange={(event) =>
              setFormValues({ ...formValues, userName: event.target.value })
            }
            error={errors.userName ? "true" : undefined}
          />
          {errors.userName && (
            <div className="error-text">{errors.userName}</div>
          )}
          <input
            type="password"
            placeholder="Password"
            className="signin-signinbox-input"
            value={formValues.password}
            onChange={(event) =>
              setFormValues({ ...formValues, password: event.target.value })
            }
            error={errors.password ? "true" : undefined}
          />
          {errors.password && (
            <div className="error-text">{errors.password}</div>
          )}
          <button
            type="submit"
            className="signin-signinbox-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>

          <div className="signin-signinbox-noaccount-signup">
            <p className="signin-signinbox-noaccount">Don't have an account?</p>
            <Link to="/signup" className="signin-signinbox-signup">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
