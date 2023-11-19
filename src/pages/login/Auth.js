import React from "react";
import { useState } from "react";
import "./forms.css";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div>
      <div class="background"></div>
      <div class="contaier">
        <div class="item">
          <h2 class="logo">
            <span>&#9775;</span>From Books To War
          </h2>
          <div class="text-item">
            <h2>
              Hello Learners! <br />
              <span> </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              repellendus? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="social-icon">
              <a href="/">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="/">
                <i class="bx bxl-twitter"></i>
              </a>
              <a href="/">
                <i class="bx bxl-youtube"></i>
              </a>
              <a href="/">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="/">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <div className=`login-section  ${activeForm === "login" ? "active" : ""}`>
         */}
        <div
          className={`login-section ${activeForm === "active" ? "active" : ""}`}
        >
          <Login activeForm={activeForm} setActiveForm={setActiveForm} />
          <Register activeForm={activeForm} setActiveForm={setActiveForm} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
