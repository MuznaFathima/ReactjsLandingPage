import CardData from "./CardData";
import "./cardStyles.css";
import React from 'react'
import AboutImg1 from "../assets/flower14.webp"
import AboutImg2 from "../assets/flower15.jpg"
import AboutImg3 from "../assets/flower16.webp"



function Card() {
    return (
        <div className="card"><h1>

Bouqs That Ship For Free
         </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis perspiciatis eaque, vero eveniet laborum autem tempora eum maxime impedit </p>
            <div className="cardcard">
                <CardData
                    image={AboutImg1}
                    heading="Double Header"
                    text='Ori lilies + roses + a vase that ship free!' 
                />
                <CardData
                    image={AboutImg2}
                    heading="Lindy Hop"
                    text='A best-selling & free shipping bouquet! '
                />
                <CardData
                    image={AboutImg3}
                    heading="Golden Rule"
                    text='One dozen sunflowers that ship for free!'
                />
            </div>
        </div>
    )
}

export default Card