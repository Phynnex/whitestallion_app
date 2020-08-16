import React from 'react';
import { Link } from 'react-router-dom';
import coinsImg from "../Images/img_4.jpg"

const AboutCrypto = () => {
  return (
    <>
      <section className="container">
      <section className="AboutCrypto">
        <section className="AboutCrypto-img left">
          <img
            alt=""
            src={coinsImg}
            style={{ width: "500px", height: "auto" }}
          />
        </section>
        <section className="AboutCrypto-text right">
            <h2> Cryptocurrency</h2><br/>
            <p>
            A cryptocurrency (or crypto currency) is a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership.It typically does not exist in physical form (like paper money) and is typically not issued by a central authority
            </p>
            <section className="btn-text"><Link to="/faqs">
              <button className="Discover">Discover</button></Link>
            </section>
          </section>
          <section className="clear"></section>
      </section>
      </section>
    </>
  )
}

export default AboutCrypto;

