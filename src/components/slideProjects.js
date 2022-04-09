import React, { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Trackerimg from '../assets/img/trackerit.jpg';


function SlideProjects(){

  return (
    <div className="Projects">
      <h1>TrackerIt</h1>
      <p>TrackerIt its an web application to tracker your correios's order</p>
    <div className="container">
    <AliceCarousel autoPlay autoPlayInterval="1500">
        <img src={Trackerimg} className="sliderprojects"/>
    </AliceCarousel>
    </div>
    </div>
  );
};

export default SlideProjects;