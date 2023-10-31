import React from 'react'
import "./SliderStyle.css"
import SliderData from './SliderData'
import image9 from "../assets/flower17.webp"
import image10 from "../assets/flower7.jpg"
import image11 from "../assets/flower22.webp"
import image12 from "../assets/flower23.webp"
import image13 from "../assets/flower24.webp"
import image14 from "../assets/flower25.webp"

function Slider() {
  return (
    <>
    <SliderData
    image={image9}
    title="Vases & Pots"
    para="Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates corporis, laboriosam iusto consequuntur magni! Fugit, nisi delectus. Doloremque est delectus ad perspiciatis ipsum consequuntur laboriosam officia dolor ut suscipit?"
    image2={image10}
    title2="Anniversary"
    para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates corporis, laboriosam iusto consequuntur magni! Fugit, nisi delectus. Doloremque est delectus ad perspiciatis ipsum consequuntur laboriosam officia dolor ut suscipit? "

    image3={image11}
    title3="Solace & Sympathy"
    para3="Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates corporis, laboriosam iusto consequuntur magni! Fugit, nisi delectus. Doloremque est delectus ad perspiciatis ipsum consequuntur laboriosam officia dolor ut suscipit?."

    />
    <SliderData
    image={image12}
    title="Thanksgiving"
    para="Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates corporis, laboriosam iusto consequuntur magni! Fugit, nisi delectus. Doloremque est delectus ad perspiciatis ipsum consequuntur laboriosam officia dolor ut suscipit?"
    image2={image13}
    title2="Congratulations"
    para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates corporis, laboriosam iusto consequuntur magni! Fugit, nisi delectus. Doloremque est delectus ad perspiciatis ipsum consequuntur laboriosam officia dolor ut suscipit? "

    image3={image14}
    title3="Mother's Day"
    para3="Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates corporis, laboriosam iusto consequuntur magni! Fugit, nisi delectus. Doloremque est delectus ad perspiciatis ipsum consequuntur laboriosam officia dolor ut suscipit?."
    
    />


    </>
    
  )
}

export default Slider