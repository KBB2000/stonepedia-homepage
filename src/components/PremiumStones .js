import React from "react";
import "../styles/style.css";
import Count from "./Count";

const stones = [
  { name: "Black Galaxy Granite", price: "₹1.00 per sq/ft", image: "https://stonepedia.in/wp-content/uploads/2024/10/kaddapah-black-limestone-01--1024x1024.png" },
  { name: "Kaddapah Black", price: "₹1.00 per sq/ft", image: "https://stonepedia.in/wp-content/uploads/2024/10/Kuppam-Green-Granite-01--1024x1024.png" },
  { name: "Kuppam Green Granite", price: "₹1.00 per sq/ft", image: "https://stonepedia.in/wp-content/uploads/2022/11/marble_720.png" },
  { name: "Black Marinace Natural Mosaic", price: "₹1.00 per sq/ft", image: "https://stonepedia.in/wp-content/uploads/2022/11/marble_720.png" },
];

const PremiumStones  = () => {
  return (
    <>
    <div className="stone-collection-container">
      <div className="stone-collection-header">
      <div className="norm">
        <div className="sec">
          <p className="subtitle1">-----Quality You Can Trust</p>
          <h3 style={{'color' : 'black'}}>Our Premium Stones
view more
</h3>
        </div>
        <div className="btn">
          <button className="view-more-btn">View More</button>
        </div>
        </div>
      </div>
      <div className="stone-grid1">
        {stones.map((stone, index) => (
          <div className="stone-item" key={index}>
            <img src={stone.image} alt={stone.name} className="stone-image" />
            <h3 className="stone-name">{stone.name}</h3>
            <p className="stone-price">{stone.price}</p>
          </div>
        ))}
      </div>
    </div>
    <Count />
    </>
  );
};

export default PremiumStones ;
