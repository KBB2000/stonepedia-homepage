import React from "react";
import "../styles/style.css";
import Reviews from "./Reviews";

const NewsSection = () => {
  const newsItems = [
    {
      id: "01",
      title: "Bharat Business Award 2023",
      description:
        "This award recognizes an employee who has come up with a new idea or process that has positively impacted the company",
    },
    {
      id: "02",
      title: "The Print",
      description:
        "This award recognizes an employee who has shown exceptional leadership skills and has inspired and motivated others.",
    },
    {
      id: "03",
      title: "Times Of India",
      description:
        "These are often awarded to businesses or individuals who have achieved success or made significant contributions in their industry",
    },
    {
      id: "04",
      title: "Hindustan Times",
      description:
        "Design well Acetech showcases the latest trends, products, and technologies in the industry and provides a platform",
    },
  ];

  return (
    <>
    <div class="news-section">
  <div class="left-column">
    <p class="featured-by">Featured by</p>
    <h2>In The News</h2>
    <button class="view-more-btn">
      View More <span>→</span>
    </button>
  </div>

  <div class="right-column">
    <div class="news-item">
      <span class="news-id">01</span>
      <h3 class="news-title">Bharat Business Award 2023</h3>
      <p class="news-description">
        This award recognizes an employee who has come up with a new idea or
        process that has positively impacted the company.
      </p>
      <button class="read-more-btn">→</button>
    </div>
    <div class="news-item">
      <span class="news-id">02</span>
      <h3 class="news-title">The Print</h3>
      <p class="news-description">
        This award recognizes an employee who has shown exceptional leadership
        skills and has inspired and motivated others.
      </p>
      <button class="read-more-btn">→</button>
    </div>
    <div class="news-item">
      <span class="news-id">03</span>
      <h3 class="news-title">Times Of India</h3>
      <p class="news-description">
        These are often awarded to businesses or individuals who have achieved
        success or made significant contributions in their industry.
      </p>
      <button class="read-more-btn">→</button>
    </div>
    <div class="news-item">
      <span class="news-id">04</span>
      <h3 class="news-title">Hindustan Times</h3>
      <p class="news-description">
        Design well Acetech showcases the latest trends, products, and
        technologies in the industry and provides a platform.
      </p>
      <button class="read-more-btn">→</button>
    </div>
  </div>
</div>
<Reviews />
</>
  );
};

export default NewsSection;
