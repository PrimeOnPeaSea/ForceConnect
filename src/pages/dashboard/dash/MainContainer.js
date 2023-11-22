import React from "react";
import "./MainContainer.css";
import CardMain from "./CardMain";
import Card1 from "../../../images/card1.jpg";
import Card2 from "../../../images/card2.jpg";
import Card3 from "../../../images/card3.jpg";
import Card4 from "../../../images/card4.jpg";
import Card5 from "../../../images/card5.jpg";
import Card6 from "../../../images/card6.jpg";
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottomCard from "./MainRightBottomCard";

function MainContainer() {
  return (
    <div className="mainconainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: "linear-gradient(to right, #1b2946, #1e3d5a)",
          }}
        >
          <div className="textContainer">
            <h1>Force Connect</h1>
            <h2>Making Forces</h2>
            <p>Learn With Top Instructors</p>
            <div className="bid">
              <a href="/vescx" className="butt">
                Shop Now
              </a>
              <p>
                80% Course Sale Ending In <span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Blogs</h2>
              <a href="/csa" className="butt2">
                Popular
              </a>
            </div>
            <div className="filter_butts">
              <a href="/vswc" className="butt">
                All
              </a>
              <a href="/sd" className="butt2">
                Army
              </a>
              <a href="/scax" className="butt2">
                Navy
              </a>
              <a href="/cjo" className="butt2">
                Air Force
              </a>
            </div>
          </div>

          <main>
            <CardMain imgSrc={Card1} title={"Blog Post 1"} hearts={"65"} />
            <CardMain imgSrc={Card2} title={"Blog Post 2"} hearts={"65"} />
            <CardMain imgSrc={Card3} title={"Blog Post 3"} hearts={"65"} />
            <CardMain imgSrc={Card4} title={"Blog Post 4"} hearts={"65"} />
            <CardMain imgSrc={Card5} title={"Blog Post 5"} hearts={"65"} />
            <CardMain imgSrc={Card6} title={"Blog Post 6"} hearts={"65"} />
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div>
    </div>
  );
}

export default MainContainer;
