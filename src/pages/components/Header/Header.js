import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FORCE CONNECT</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Blogs</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="login-btn">
            <a className="login" href="/auth">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
