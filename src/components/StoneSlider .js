import React from "react";
import Slider from "react-slick";
import "../styles/style.css"; // Add your custom styles here

const StoneSlider  = () => {
  const leftImages = [
    // "https://nextr.in/blog/wp-content/uploads/2023/08/Digital-India-1.jpg",
    // "𝗹https://nextr.in/blog/wp-content/uploads/2023/08/Digital-India-1.jpg",
    // "https://nextr.in/blog/wp-content/uploads/2023/08/Digital-India-1.jpg",
    // "https://nextr.in/blog/wp-content/uploads/2023/08/Digital-India-1.jpg",
  ];

  const rightImages = [
    // "https://nextr.in/blog/wp-content/uploads/2023/08/Digital-India-1.jpg",
    // "https://nextr.in/blog/wp-content/uploads/2023/08/Digital-India-1.jpg",
    // "https://nextr.in/blog/wp-content/uploads/2023/08/Digital-India-1.jpg",
    // "https://nextr.in/blog/wp-content/uploads/2023/08/Digital-India-1.jpg",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="slider-container">
      {/* Left Slider */}
      <div className="image-column left">
        <Slider {...sliderSettings}>
          {leftImages.map((img, index) => (
            <div key={index} className="image-wrapper">
              <img src={img} alt={`Left Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Middle Text */}
      <div className="middle-text">
        <h1>Experience The World Of Natural Stones Like Never Before</h1>
      </div>

      {/* Right Slider */}
      <div className="image-column right">
        <Slider {...sliderSettings}>
          {rightImages.map((img, index) => (
            <div key={index} className="image-wrapper">
              <img src={img} alt={`Right Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StoneSlider ;
