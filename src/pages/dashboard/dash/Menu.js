import React, { useEffect } from "react";
import "./Menu.css";
import logo from "../../../images/logo.png";
import {
  FaDelicious,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../../authentication/firebase";

function Menu() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu className="menu">
      <img src={logo} alt="" />
      <div className="divider">
        <ul id="mainMenu">
          <Icon icon={<FaDelicious />} />
          <Icon icon={<FaShoppingCart />} />
        </ul>

        <ul className="lastMenu">
          <Icon icon={<FaCog />} />
          <a
            onClick={() => {
              signOut(auth);
            }}
            href="/auth"
            style={{
              width: "100%",
            }}
          >
            <Icon icon={<FaSignOutAlt />} />
          </a>
        </ul>
      </div>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="/">{icon}</a>
  </li>
);

export default Menu;
