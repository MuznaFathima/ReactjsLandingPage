import React from 'react'
import "./SliderStyle.css"
function SliderData(props) {
  return (
    <div className='container'>

        <div className='cta'>
            <img className='imgs' src={props.image3} alt="image" />
            <div className='text'>
                <h2>{props.title3}</h2>
                <p>{props.para3}</p>
                <button>Shop Now</button>
            </div>
        </div>

        <div className='cta'>
            <img className='imgs' src={props.image2} alt="image" />
            <div className='text'>
                <h2>{props.title2}</h2>
                <p>{props.para2}</p>
                <button>Shop Now</button>
            </div>
        </div>
        <div className='cta'>
            <img className='imgs' src={props.image} alt="image" />
            <div className='text'>
                <h2>{props.title}</h2>
                <p>{props.para}</p>
                <button>Shop Now</button>
               
            </div>
        </div>


    </div>
  )
}

export default SliderData