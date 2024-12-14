import React from "react";
import "../styles/style.css";
import Category from "./Category";
const Section = () => {
  return (
    <>
      <div className="center">
        <p className="redefining">--------redefining stone sourcing-------</p>
        <h1>why stonePedia ?</h1>
      <hr className="hr" />
      </div>
      <div className="section-container">
        <div className="section">
          <div className="three-section">
            <i class="fa-solid fa-check-double"></i>
            <h2>Rigorous Quality Control</h2>
            <p>
              Multi-level inspections ensure every stone meets the highest
              durability and aesthetic standards.
            </p>
          </div>
          <div className="three-section">
            <i class="fa-regular fa-id-card"></i>
            <h2>Certified Suppliers & Compliance</h2>
            <p>
              Sourced from certified suppliers, every stone complies with global
              and local regulations.
            </p>
          </div>
          <div className="three-section">
            <i class="fa-solid fa-user"></i>
            <h2>Expert Guidance and Support</h2>
            <p>
              StonePedia’s specialists provide expert advice on material
              selection, application, and maintenance.
            </p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="section">
          <div className="three-section">
            <i class="fa-solid fa-check-double"></i>
            <h2>Rigorous Quality Control</h2>
            <p>
              Multi-level inspections ensure every stone meets the highest
              durability and aesthetic standards.
            </p>
          </div>
          <div className="three-section">
          <i class="fa-solid fa-house"></i>
            <h2>Doorstep Delivery</h2>
            <p>
            Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.
            </p>
          </div>
          <div className="three-section">
          <i class="fa-solid fa-sd-card"></i>
            <h2>Guaranteed Order Fulfillment</h2>
            <p>
            Accurate and timely order processing to meet all project timelines without delays.
            </p>
          </div>
        </div>
      </div>
      <div className="image-bg">
        {/* <img src="https://stonepedia.in/wp-content/uploads/2024/10/d7a298d507e58de3_7320-w1050-h525-b2-p0-q90-.webp" alt="images" /> */}
      </div>
      <Category />
       </>
  );
};

export default Section;
