import React from 'react'
import "./ProductsStyles.css"
import AboutImg1 from "../assets/flower8.webp"
import AboutImg2 from "../assets/flower9.webp"
import AboutImg3 from "../assets/flower13.webp"
import AboutImg4 from "../assets/flower11.webp"
import AboutImg5 from "../assets/flower20.webp"
import AboutImg6 from "../assets/flower12.webp"

import ProductData from './ProductData'
function Products() {
  return (
   <>
   <div className='products'>
   <h1>Fresh Picks</h1>
            <p>We Are Dewy.Our story began with a simple idea: to change the way people buy flowers online. More than twelve years and millions of orders later, we are still constantly raising the standard for bouquets shipped to your doorstep.</p>
    <ProductData
    className="first-prod"
    heading="Better by design."
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates corporis, m iusto consequuntur magni! Fugit, nisi delectus. Doloremque est deleclaboriosatus ad perspiciatis ipsum consequuntur laboriosam officia dolor ut suscipit?"
    img1={AboutImg5}
    img2={AboutImg6}
    
    />
    
    </div>





        <div className='products'>
            
            <ProductData
            className="first-prod-reverse"
            heading="Delivering coast to coast."
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates corporis, laboriosam iusto consequuntur magni! Fugit, nisi delectus. Doloremque est delectus ad perspiciatis ipsum consequuntur laboriosam officia dolor ut suscipit?"
            img1={AboutImg1}
            img2={AboutImg2}
            
            />
    
        </div>
    
    <div className='products'>
    
    <ProductData
    className="first-prod"
    heading="Since 2013 "
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates corporis, laboriosam iusto consequuntur magni! Fugit, nisi delectus. Doloremque est delectus ad perspiciatis ipsum consequuntur laboriosam officia dolor ut suscipit?"
    img1={AboutImg3}
    img2={AboutImg4}
    
    />
    
    </div>
    
        
   </>
  )
}

export default Products