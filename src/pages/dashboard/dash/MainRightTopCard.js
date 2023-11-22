import React from "react";

function MainRightTopCard() {
  return (
    <div className="topCard">
      <div className="topCard_name">
        <h2>Course Recommendations</h2>
        <a href="/more">View More</a>
      </div>

      <div className="earning">
        <p>
          Course 1 <span>187</span>
        </p>

        <p>
          Course 2 <span>5</span>
        </p>

        <p>
          Course 3 <span>25</span>
        </p>

        <p>
          Course 4 <span>200</span>
        </p>

        <p>
          Course 5 <span>262</span>
        </p>
      </div>
    </div>
  );
}

export default MainRightTopCard;
