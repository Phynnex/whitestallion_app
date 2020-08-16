import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <section className="footer">
        <section className="footer-content">
          <section className="footer-section text">
            <h1 className="logo-text"><span>White Stallion</span></h1>
            <p>
            White Stallion Technologies Limited is an emerging leader in the Nigerian Information and Communication Technology (ICT) industry market that specializes in offering next-generation, value-focused in programming, computer engineering and ICT networking amongst other services. 
            </p>
            <section className="contact">
              <span><i className="fa fa-phone"></i>  07033499577 </span>
              <span><i className="fa fa-envelope"></i>  irishbishop007@gmail.com </span>
            </section>
            <section className="socials">
                <a href="/"><i className="fa fa-facebook"></i></a>
                <a href="/"><i className="fa fa-twitter"></i></a>
                <a href="/"><i className="fa fa-instagram"></i></a>
            </section>
          </section>
          <section className="footer-section links">
            <h2> Quick Links</h2>
            <br/>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about_us">About Us</Link></li>
            <li><Link to="/exchange_rate">Exchange Rate</Link></li>
            <li><Link to="/buy_sell">Buy/Sell</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </section>
          <section className="footer-section contact-form">
            <h2>Updates</h2>
            <p>Subscribe to our monthly news letter</p>
            <br/>
            <form>
              <input className="text-input contact-input" placeholder="Your email address"></input>
              <button className="subscribe"><i className="fa fa-envelope"></i>Subscribe</button>
            </form>
          </section>
        </section>

        <section className="footer-bottom">
          &copy; whiteStallion.com | Designed by Phynnex
        </section>
      </section>
    </>
  );
}

export default Footer;