
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/flower50.jpg"
import Footer from '../components/Footer'

import Shop from '../components/Shop'

Footer
function Service() {
  return (
   <> 
   <Navbar/>
   <Hero  cName="hero-mid"
   heroImg={AboutImg}
   title="Shop"
  
   url="/"
   btnClass="hide"
   />
   <Shop/>
  
   <Footer/>
   </>
  )
}

export default Service