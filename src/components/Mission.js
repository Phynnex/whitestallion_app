import React from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <>
      <section className="mission-container">

        <section className="mission-text left">
          <h2>Our Mission </h2>
          <p>To provide easy and fast access to the trade of digital currencies with our state of art authomated payment system. To support our customers in making the best decisions in trading.</p>
          <section className="btn-text">
            <Link to= "/about_us"><button className="about-us">About Us</button></Link>
          </section>
        </section>
        <section className="mission-img right">

        </section>
        <section className="clear"></section>

        <section className="mission-card">
        <section className="rows">
        <section className="Mission-column Mission-column-1" >
          <h2> Secure Storage </h2>
          <p>We store the vast majority of the digital assets in secure offline storage.</p>
        </section>
        <section className="Mission-column Mission-column-2" >
          <h2>Insurance Protection</h2>
          <p>Digital currency stored on our servers is covered by our insurance policy.</p>
        </section>
        <section className="Mission-column Mission-column-3">
          <h2>Best Trading Deals</h2>
          <p>Our experts study the market trends and give advice for the most profitable deal.</p>
        </section>
      </section>
      </section>
      <section className="clear"></section>
      </section> 
    </>
  );
}

export default Mission;