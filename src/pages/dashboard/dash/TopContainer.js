import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import { useAuthValue } from "../../../authentication/AuthContext";
import women from "../../../images/women.jpg";

function TopContainer() {
  const { currentUser } = useAuthValue();
  useEffect(() => {
    const mouseTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");
    mouseTarget.addEventListener("mouseenter", () => {
      mouseTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)";
    });

    menuContainer.addEventListener("mouseleave", () => {
      mouseTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(300px)";
    });
  }, []);

  return (
    <div className="topConainer">
      <div className="inputBox">
        <input type="text" placeholder="Search items, collections" />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <div className="profileConainer">
        <i className="profileIcon">
          <FaBell />
        </i>
        <div className="profileImage">
          <img src={women} alt="" />
        </div>
        <p className="profileName">{currentUser?.email}</p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>

        <div className="menuContainer" id="menuContainer">
          <ul>
            <li>My Profile</li>
            <li>My CV</li>
            <li>Course History</li>
            <li>Payment History</li>
            <li>Email Verified: {`${currentUser?.emailVerified}`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
