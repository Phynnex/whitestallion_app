import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import testimonial_1 from '../Images/testimonial_1.jpg'
import testimonial_2 from '../Images/testimonial_2.jpg'
import testimonial_3 from '../Images/testimonial_3.jpg'
import testimonial_4 from '../Images/testimonial_4.jpg'

const Testimonials = () => {
  return (
    <>
      <sectionn>
      <AliceCarousel autoPlay autoPlayInterval="4000">
        <img src={testimonial_1} alt="" className="sliderimg"/>
        <img src={testimonial_2}  alt="" className="sliderimg"/>
        <img src={testimonial_3} alt="" className="sliderimg"/>
        <img src={testimonial_4} alt="" className="sliderimg"/>
      </AliceCarousel>
      </sectionn>
    </>
  )
}

export default Testimonials;