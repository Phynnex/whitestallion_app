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
// import Table from "../components/Table"
// import Staff from '../components/Staff';

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
      {/* <Staff /> */}
      {/* <Table /> */}
    </>
  );
}

export default Home;