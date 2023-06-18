import React from "react";
import "./Hero.css";
import hero_img from "../../assests/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="row">
        <div className="col1 col-12 col-lg-6 ">
          <h3>OUR</h3>
          <h1>IMPACT</h1>
          <p>
            We're democratising access to quality education. Over the last few
            years, we have touched the lives of thousands of students from
            hundreds of institutes across India by helping them get low-cost &
            flexible education finance.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <img src={hero_img} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
