import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/style.css";
import ClientCarousel from "./ClientCarousel ";

const Reviews = () => {
  const reviews = [
    {
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVEVYNDvn4OsuxtL1ay1qM8AmiVfAejFllmXt7AV0n5D3mMjvD_Zg=w128-h128-c-rp-mo-br100",
      name: "Vishakha Sharma",
      time: "10 months ago",
      stars: "⭐⭐⭐⭐⭐",
      text: "Stonepedia has a stunning selection of marble and granite - found the perfect countertop for my kitchen. Highly recommended!",
    },
    {
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjUadPgQswf8Unpfl9gSeluEr9IsfxT_RvLL_YX5G1cIt7TTaA6D=w128-h128-c-rp-mo-br100",
      name: "Amit Kumar",
      time: "8 months ago",
      stars: "⭐⭐⭐⭐⭐",
      text: "Amazing experience with their team. They provided me with a beautiful granite design for my living room. Excellent service!",
    },
    {
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVLfKDAjMCre7NoctRD1Dwg9GhO-brRDRCjQyUP-KMVAB1hlQPM=w128-h128-c-rp-mo-br100",
      name: "Sneha Gupta",
      time: "5 months ago",
      stars: "⭐⭐⭐⭐⭐",
      text: "The quality and the service were exceptional! Would definitely recommend Stonepedia for premium stones and marbles.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
    <div className="slider-container">
    <div className="container">
      <div className="left-section">
        <h3 className="section-heading">Testimonials</h3>
        <h1 className="main-heading">What Our Happy Client Say About Us</h1>

        <Slider {...sliderSettings} className="reviews-carousel">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img
                src={review.image}
                alt={review.name}
                className="user-image"
              />
              <h3>{review.name}</h3>
              <p>{review.time}</p>
              <p className="stars">{review.stars}</p>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </Slider>
        <button className="write-review-btn">Write Review →</button>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h3 className="section-heading">Happy To Consult</h3>
        <h1 className="main-heading">Book Consultation Now</h1>
        <p className="form-description">
          Our dedicated team will get back to you within the next 24 hours.
        </p>
        <form className="consultation-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="text" placeholder="Company Name" required />
          <textarea placeholder="Write Your Message" required />
        </form>
          <button type="submit" className="submit-btn">
            Submit Request
          </button>
      </div>
    </div>
    </div>
    <ClientCarousel />
  </>
  );
};

export default Reviews;
