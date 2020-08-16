import React from "react";
import { Link } from 'react-router-dom';
import slack from '../Images/slack.png';


const Navbar = () => {
  return (
    <>
      <section className="home-header-container">
        <section className="navigation-bar">
        <section className="Navbar-Img left">
          <img
            alt=""
            src={slack}
            style={{ width: "70px", height: "70px", marginTop: "15px", marginLeft: "15px"}}
          />
        </section>
        <nav className="navbar right">
          <ul className="navbar-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about_us">About Us</Link></li>
            <li><Link to="/exchangerate">ExchangeRate</Link></li>
            <li><Link to="/buy_sell">Buy/Sell</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </nav>
      </section>
      </section>
    </>
  );
};

export default Navbar;