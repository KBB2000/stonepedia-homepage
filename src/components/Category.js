import BestSellingProducts from './BestSellingProducts ';
import React from 'react';
import Slider from "react-slick";

import "../styles/style.css"

const Category = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <>
      <div className="section-container2">
       <div className="row">
        <div className="text">
            <p className='redefining'>----what we offer?----</p>
            <h2>Choose by Category</h2>
        </div>
        <div className="button">
            <button className='rights'>View More <i class="fa-solid fa-arrow-right"></i></button>
        </div>
       </div>
    <hr className='hr'/>
      
    <div>
        <div className="slider1">
        <div className="slider-container1">
      <Slider {...settings}>
        <div>
          <img src="https://stonepedia.in/wp-content/uploads/2024/10/b-01.png" alt="img1" />
          <h3>Grenite</h3>
        </div>
        <div>
        <img src="https://stonepedia.in/wp-content/uploads/2024/10/g-01.png" alt="img1" />
<h3>Onyx</h3>
        </div>
        <div>
        <img src="https://stonepedia.in/wp-content/uploads/2024/10/Black-Marinace-Natural-Mosiac-01-.png" alt="img1" />
<h3>Quartz</h3>
        </div>
        <div>
        <img src="https://stonepedia.in/wp-content/uploads/2024/10/chima-pink-granite-Custom.jpg" alt="img1" />
<h3>travertine</h3>
        </div>
        <div>
        <img src="https://stonepedia.in/wp-content/uploads/2024/10/Dholpur-Beige-Limestone-01-.png" alt="img1" />
<h3>sandstone</h3>
        </div>
        <div>
        <img src="https://stonepedia.in/wp-content/uploads/2024/10/Udaipur-Green-Marble-01--1024x1024.png" alt="img1" />
<h3>Limestone</h3>
        </div>
      </Slider>
    </div>
        </div>
    </div>
    </div>
    <BestSellingProducts />
    </>
  );
}

export default Category;
