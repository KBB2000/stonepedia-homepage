import React from "react";
import "../styles/style.css";
import PremiumStones from "./PremiumStones ";

function MinSlider() {
  const stoneData = [
    {
      name: "Marble",
      image:
        "https://stonepedia.in/wp-content/uploads/2024/10/Golden-Spider-Marble-01--150x150.png",
    },
    {
      name: "Granite",
      image:
        "https://stonepedia.in/wp-content/uploads/2024/10/chima-pink-granite-Custom-300x300.jpg",
    },
    {
      name: "Quartzite",
      image:
        "https://stonepedia.in/wp-content/uploads/2024/10/Udaipur-Green-Marble-01--300x300.png",
    },
    {
      name: "Limestone",
      image:
        "https://stonepedia.in/wp-content/uploads/2024/10/chima-pink-granite-Custom-150x150.jpg",
    },
    {
      name: "Travertine",
      image:
        "https://stonepedia.in/wp-content/uploads/2024/10/Kuppam-Green-Granite-01--1024x1024.png",
    },
    {
      name: "Onyx",
      image:
        "https://stonepedia.in/wp-content/uploads/2024/10/Dholpur-Red-Limestone-01--150x150.png",
    }, // Ensure this file exists in /public/images/ directory
  ];

  return (
    <>
    <div className="Apps">
      <div className="content">
        <div className="norm">
        <div className="sec">
          <h1>StonePedia Exclusive</h1>
          <p className="subtitle">DISCOVER YOUR IDEAL STONE</p>
        </div>
        <div className="btn">
          <button className="view-more-btn">View More</button>
        </div>
        </div>
        <hr className="hr hori"/>
        <div className="stone-grid">
          {stoneData.map((stone, index) => (
            <div>
              <div key={index} className="stone-card">
                {/* Check if the image is an absolute URL or a relative path */}
                <img
                  src={
                    stone.image.startsWith("http")
                      ? stone.image
                      : process.env.PUBLIC_URL + stone.image
                  }
                  alt={stone.name}
                />
              </div>
              <p>{stone.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <PremiumStones />
    </>
  );
}

export default MinSlider;
