import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/flower53.jpg"
import Footer from '../components/Footer'
import Form from '../components/Form'
Footer
function Contact() {
  return (
   <>
   <Navbar/>
   <Hero  cName="hero-mid"
   heroImg={AboutImg}
   title="Join Us"
  
   url="/"
   btnClass="hide"
   />
   <Form/>
   <Footer/>
   </>
  )
}

export default Contact