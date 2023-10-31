import React from 'react'
import "./ProductsStyles.css"

function ProductData(props) {
  return (
    <div className={props.className}>
      <div className='prod-text'>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className='image'>
        <img src={props.img1} alt="no image" />
        <img src={props.img2} alt="no image" />
      </div>
    </div>
  )
}

export default ProductData