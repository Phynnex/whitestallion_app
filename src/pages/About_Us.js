import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Staff from '../components/Staff';

const About_Us = () => {
  return(
    <>
      <section className="about-us-container">
        <section className="about-us-content">
        <section><Navbar /></section>
        <h1> About White Stallion</h1>
        <p>White Stallion is the world’s most popular way to buy and sell<br/> bitcoin, ethereum, and litecoin</p>
        </section>
        <section className="clear"></section>
        <section className="about-us-services">
          <section className="vision-mission-objective-culture">
           <div> 
           <br/><h2>Mission</h2>
            <p>To provide competitive ICT solutions and superior services in our other line of trade, tailored to support our customer’s long term success while rendering consistent value to our shareholders</p>
          </div>

          <div> 
          <br/><h2>Vision</h2>
            <p>To be Nigeria’s foremost ICT Company, general contract, engineering, projects management, procurement, logistics, providing innovative purchasing & supplies, as well as world class InfoTech solutions</p>
          </div>

          <div> 
          <br/><h2>Company Culture</h2>
              <p>Simpler procurement, purchasing & supppes, logistics services through seamless processes and exceptional customer service</p>
              <p>Customized solutions that are built on a perfect combination of industry know-how and InfoTech expertise</p>
              <p>Different ICT solutions for different markets, perfectly tailored to meet the needs of each client</p>
          </div>

          <div> 
          <br/><h2>Our Objectives</h2>
              <p>Our core objective is to be the best at helping our customers build their ICT solutions and upgraded better-off than before they approached us.</p>

              <p>To take advantage of the emerging opportunities and quickly achieve a reasonable proportion of our target market within the shortest possible time in line with our strategic focus in our other areas of specialization</p>

              <p>To consistently exploit the under-developed areas of our target market by creating innovative services to meet customers’ demands and needs in terms of engineering, procurement, purchasing & supppes and logistics </p>

              <p>To promote less stressful, best-in-class ICT solutions across our entire-value chain</p>

              <p>To estabpsh mutually beneficial vendor, partnerships/alpances with manufacturers, equipment vendors and retail merchants</p>
          </div>


          </section>
          
        </section>
        <section><Staff /></section>
        <section className="clear"></section>
        <section><Testimonials /></section>
        <section className="clear"></section>
        <section><Footer /></section>
      </section>
    </>
  );
}

export default About_Us;