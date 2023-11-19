import { useState } from "react";
import "./forms.css";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../authentication/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../authentication/AuthContext";

function Login({ activeForm, setActiveForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        } else {
          navigate("/");
        }
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className={`form-box login`}>
      <form onSubmit={login} name="login_form">
        <h2>Sign In</h2>
        {error && <div className="auth__error">{error}</div>}
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
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="/">Forget Password</a>
        </div>
        <button className="btn" type="submit">
          Log In
        </button>
      </form>
      <div className="create-account">
        <p>
          Create A New Account?
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveForm("active");
            }}
            className="register-link"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
