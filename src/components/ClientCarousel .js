import React from "react";
import "../styles/style.css";

const images = [
  "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-03.png",
  "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-04.png",
  "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-01.png",
  "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-02.png",
  "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-09.png",
  "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-10.png",
  "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-05.png",
  "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-08.png",
];

const ClientCarousel = () => {
  return (
    <>
    <div className="carousel-container">
    <p style={{"color":"orange", "textAlign" :"center"}}>---Our Clients</p>
    <h3 style={{"color" :"black"}}>Our Valuable Clients
    </h3>
      <div className="carousel-row">
        {images.slice(0, 4).map((src, index) => (
          <img key={index} src={src} alt={`Client ${index + 1}`} />
        ))}
      </div>
      <div className="carousel-row reverse">
        {images.slice(4, 8).map((src, index) => (
          <img key={index} src={src} alt={`Client ${index + 5}`} />
        ))}
      </div>
    </div>
    </>
  );
};

export default ClientCarousel;
