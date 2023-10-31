import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import AboutImg from "../assets/flower49.jpg"
import Footer from '../components/Footer'
import Slider from '../components/Slider'



function Home() {
  return (
   
    <>
    <Navbar/>
   <Hero  cName="hero"
   heroImg={AboutImg}
   title="Let Your Feelings Blossom"
   text="Floral Expressions"
   buttonText="Shop"
   url="/service"
   btnClass="show"
   />
  
      <Slider/>
   <Footer/>
  
    </>
   
  )
}

export default Home