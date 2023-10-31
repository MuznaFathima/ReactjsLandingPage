import React from 'react'
import "./ShopStyles.css"
import { Col, Container, Row } from 'react-bootstrap'
import image1 from "../assets/flower28.webp"
import image2 from "../assets/flower29.webp"
import image3 from "../assets/flower31.webp"
import image4 from "../assets/flower32.webp"
import image5 from "../assets/flower34.webp"
import image6 from "../assets/flower35.webp"
import image7 from "../assets/flower36.webp"
import image8 from "../assets/flower37.webp"
import image9 from "../assets/flower38.webp"
import image10 from "../assets/flower39.webp"
import image11 from "../assets/flower40.webp"
import image12 from "../assets/flower41.webp"

import ShopData from './ShopData'
Col

function Shop() {
    return (
      
<>
    
        
                 <ShopData
                 className1="prod-card"
                     className="product-card"
                 heading="New"
                 image={image1}
                 name="HYDRANGEA"
                 subname="Dew Gooder"
                 description="Goody goodies never looked so good!"
                 rate="$65.00"
                 discount="$36.00"
                 className2="product-card"
                 heading2="New"
                 image2={image2}
                 name2="Roses"
                 subname2="Chai And Mighty"
                 description2="A free shipping floral adaptation of Team Dewy's favorite fall flavor – chai spice!"
                 rate2="$115.00"
                 discount2="$63.00"
                 className3="product-card"
                 heading3="New"
                 image3={image3}
                 name3="Peaches"
                 subname3="Peach Roses"
                 description3=" peachy-pink roses perfect for the daring DIY-er, florist on the go, or amateur arranger looking to up the ante."
                 rate3="$125.00"
                 discount3="$59.00"

    
                 />

<ShopData
                 className1="prod-card"
                     className="product-card"
                 heading="New"
                 image={image4}
                 name="plant"
                 subname="Root 66"
                 description="A plant pal that's prepared to travel far and wide to reach your doorstep!"
                 rate="$105.00"
                 discount="$76.00"
                 className2="product-card"
                 heading2="New"
                 image2={image5}
                 name2="Tulips"
                 subname2="Fall Order"
                 description2="For a fast fall fix, feast your eyes on this vase, vase baby!"
                 rate2="$265.00"
                 discount2="$106.00"
                 className3="product-card"
                 heading3="New"
                 image3={image6}
                 name3="roses"
                 subname3="Extra Buttercream"
                 description3="A double dozen David Austin garden roses in sweet tooth-satisfying shades of peachy pinks!"
                 rate3="$123.00"
                 discount3="$68.00"

    
                 />
                 
<ShopData
                 className1="prod-card"
                     className="product-card"
                 heading="Rising"
                 image={image7}
                 name="Tulips"
                 subname="Sweet Potato Pie"
                 description="this vase arrangement just screams home-baked happiness!"
                 rate="$299.00"
                 discount="$190.00"
                 className2="product-card"
                 heading2="Rising"
                 image2={image8}
                 name2="lily"
                 subname2="Lil' Power
                 "
                 description2="A statement-making vase full of lilies!"
                 rate2="$178.00"
                 discount2="$86.00"
                 className3="product-card"
                 heading3="Rising"
                 image3={image9}
                 name3="Ranunculi"
                 subname3="Red Lip Classic"
                 description3="A red era-ready bunch of red ranuncs and anems!"
                 rate3="$160.00"
                 discount3="$48.00"

    
                 />
                 <ShopData
                 className1="prod-card"
                     className="product-card"
                 heading="Rising"
                 image={image10}
                 name="Daisy"
                 subname="Gerb Appeal"
                 description="Team Dewy's sweetest fall gift"
                 rate="$299.00"
                 discount="$190.00"
                 className2="product-card"
                 heading2="Rising"
                 image2={image11}
                 name2="Peonies"
                 subname2="Toast Of The Town
                 "
                 description2=" hand-tied bouquet featuring twenty-four-ish stems of farm fresh flowers like peonies"
                 rate2="$178.00"
                 discount2="$86.00"
                 className3="product-card"
                 heading3="Rising"
                 image3={image12}
                 name3="Olive"
                 subname3="Field Trip"
                 description3="No permission slip needed to experience this field grown foliage - just hit that add to cart button!"
                 rate3="$160.00"
                 discount3="$48.00"

    
                 />
                
                
    
</>
            


      


    )
}

export default Shop