import React from 'react'
import AboutCrypto from "../components/AboutCrypto"
//import Calculator from "../components/Calculator"
import Carousel from "../components/Carousel"
import CryptoPrices from "../components/CryptoPrices"
import Footer from "../components/Footer"
import Mission from "../components/Mission"
//import Navbar from '../components/Navbar'
import Testimonials from "../components/Testimonials"
import News from "../components/News"
// import Tables from "../components/Tables"

const Home = () => {
  
  return (
    <>
      {/*<Navbar/>*/}
      <Carousel/>
      <AboutCrypto/>
      <CryptoPrices/>
      <Mission/>
      <News/>
      <Testimonials/>
      <Footer/> 
      {/* <Tables /> */}
    </>
  );
}

export default Home;