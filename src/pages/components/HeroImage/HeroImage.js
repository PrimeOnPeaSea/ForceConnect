import React from "react";
import "./HeroImage.css";

const HeroImage = () => {
  return (
    <div className="hero-background">
      <div className="three-sections">
        <div className="left">
          <div className="frame">
            <div className="left_image"></div>
          </div>
          <div className="text">
            <p className="description">
              Learn from the best instructors of the field. Gain knowledge and a
              new skillset. Prepare yourself for your future, for the country.
            </p>
          </div>
          <div class="wrapper">
            <button className="clear-button button">
              <a className="button__text" href="/learn">
                <span>Learn</span>
              </a>
            </button>
          </div>
        </div>
        <div className="middle">
          <div className="circle">
            <div className="image"></div>
          </div>
        </div>
        <div className="right">
          <div className="frame">
            <div className="right_image"></div>
          </div>
          <div className="text">
            <p className="description">
              Work with us to help the students of our country. Share your vast
              knowledge and experience with the students. Help them to prepare
              for their future.
            </p>
          </div>
          <div class="wrapper">
            <button className="clear-button button">
              <a className="button__text" href="/teach">
                <span>Teach</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
