import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <div className="topbar">
        <nav>
          <ul>
            <li>
              <a href="/army">Army</a>
            </li>
            <li>
              <a href="/air_force">Air Force</a>
            </li>
            <li>
              <a href="/navy">Navy</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="gallery">
        <div className="gallery-item">
          <div className="item-title">WEBINARS</div>
          <div className="item-image item1"></div>
        </div>
        <div className="gallery-item">
          <div className="item-title">BOOKS</div>
          <div className="item-image item2"></div>
        </div>
        <div className="gallery-item">
          <div className="item-title">COURSES</div>
          <div className="item-image item3"></div>
        </div>
        <div className="gallery-item">
          <div className="item-title">OFFERS</div>
          <div className="item-image item4"></div>
        </div>
      </div>
    </div>
  );
};

export default Products;
