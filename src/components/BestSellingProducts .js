import React from "react";
import "../styles/style.css";
import MinSlider from "./MinSlider";

const BestSellingProducts = () => {
  const products = [
    { name: "Baltic Sea Wave", price: "₹1.00 per sq/ft", image: "https://stonepedia.in/wp-content/uploads/2024/10/Udaipur-Green-Marble-01--300x300.png" },
    {
      name: "Imperial White Granite",
      price: "₹1.00 per sq/ft",
      image: "https://stonepedia.in/wp-content/uploads/2024/10/Golden-Spider-Marble-01--300x300.png",
    },
    { name: "Makrana White", price: "₹1.00 per sq/ft", image: "https://stonepedia.in/wp-content/uploads/2024/10/Kuppam-Green-Granite-01--300x300.png" },
    { name: "Dholpur Red", price: "₹1.00 per sq/ft", image: "https://stonepedia.in/wp-content/uploads/2024/10/chima-pink-granite-Custom-300x300.jpg" },
  ];

  return (
    <>
    <section className="best-selling-products">
      <div className="header">
        <div className="two-part">
          <span className="sub-title">Best in Demand</span>
          <h2>Best Selling Products</h2>
        </div>
        <div>
          <button className="view-more">View More →</button>
        </div>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
    <MinSlider />
    </>
  );
};

export default BestSellingProducts;
