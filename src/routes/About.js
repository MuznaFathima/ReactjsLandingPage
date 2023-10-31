import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/flower54.jpg"
import Products from '../components/Products'
import Card from '../components/Card'
import Footer from '../components/Footer'



function About() {
  return (
   <>
   <Navbar/>
   <Hero  cName="hero-mid"
   heroImg={AboutImg}
   title="About"
  
   url="/"
   btnClass="hide"
   />
   <Products/>
   <Card/>
   <Footer/>
    </>
  )
}

export default About