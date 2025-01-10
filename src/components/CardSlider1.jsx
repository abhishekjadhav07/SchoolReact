import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./CardSlider.css"; // Create this CSS file for styling

const CardSlider1 = ({ cards }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Adjust the speed of transition
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    nextArrow: <button className="next-btn">Next</button>, // Custom next arrow
    prevArrow: <button className="prev-btn">Prev</button>, // Custom prev arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <video width="100%" controls>
            <source src={card.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>{card.title}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider1;
