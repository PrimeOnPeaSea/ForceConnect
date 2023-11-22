import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

function CardMain({ imgSrc, title, hearts }) {
  return (
    <div className="card_main">
      <img src={imgSrc} alt="" className="card_main_img" />
      <div className="card_main_name">
        <h2>{title}</h2>
        <div className="card_main_icon">
          <i>
            <BsFillHeartFill /> <span>{hearts}</span>
          </i>
        </div>
      </div>

      <div className="stat">
        <div>
          <p>
            Blog Rating<span>4.2</span>
          </p>
        </div>
        <div>
          <p>
            Writer<span>Writer Name</span>
          </p>
        </div>
      </div>

      <div className="card_main_butt">
        <a href="/wcewx" className="butt butn">
          View Blog
        </a>
        <a href="/sttvcsj" className="butt2 butn">
          View Profile
        </a>
      </div>
    </div>
  );
}

export default CardMain;
