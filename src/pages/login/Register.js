import { useState } from "react";
import "./forms.css";
import { auth } from "../../authentication/firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useAuthValue } from "../../authentication/AuthContext";

function Register({ activeForm, setActiveForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setTimeActive } = useAuthValue();

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className={`form-box register`}>
      <form onSubmit={register} name="registration_form">
        <h2>Sign Up</h2>
        {error && <div className="auth__error">{error}</div>}
        <div className="input-box">
          <span className="icon">
            <i className="bx bxs-user"></i>
          </span>
          <input
            type="text"
            value={email}
            required
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <i className="bx bxs-envelope"></i>
          </span>
          <input
            type="email"
            value={email}
            required
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <i className="bx bxs-lock-alt"></i>
          </span>
          <input
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="remember-password">
          <label for="">
            <input type="checkbox" />I agree with this statement
          </label>
        </div>
        <button className="btn" type="submit">
          Sign Up
        </button>
      </form>
      <div className="create-account">
        <p>
          Already have an account?
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveForm("");
            }}
            className="login-link"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
