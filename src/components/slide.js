import React, { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import tayobg from '../assets/img/tayobg.jpeg';
import tayo3 from '../assets/img/tayo3.jpeg';
// import tayo4 from '../assets/img/tayo4.jpeg';
import tayo5 from '../assets/img/tayo5.jpeg';


function Slide(){

  return (

    <AliceCarousel autoPlay autoPlayInterval="1500">
        <img src={tayo5} className="sliderimg"/>
        <img src={tayobg} className="sliderimg"/>
        <img src={tayo3} className="sliderimg"/>
        {/* <img src={tayo4} className="sliderimg"/> */}
    </AliceCarousel>

  );
};

export default Slide;