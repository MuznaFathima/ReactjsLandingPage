import React from 'react'
import "./ShopStyles.css"
function ShopData(props) {
    return (

        <div className="prod-card">

            <div className={props.className}>
                <div className='badge'>{props.heading}</div>
                <div className='product-t'>

                    <img src={props.image} alt="image" />

                </div>
                <div className='product-details'
                >
                    <span className='product-c'>{props.name}</span>
                    <h4><a href="/">{props.subname}</a></h4>
                    <p>{props.description}</p>

                    <div className='product-bottom-details'>
                        <div className='product-price'><small>{props.rate}</small>{props.discount}</div>
                        <div className='product-links'>

                            <a href="/"><i className='fa fa-heart'></i></a>
                            <a href="/"><i className='fa fa-shopping-cart'></i></a>
                        </div>
                    </div>
                </div>



            </div>

            <div className={props.className2}>
                <div className='badge'>{props.heading2}</div>
                <div className='product-t'>

                    <img src={props.image2} alt="image" />

                </div>
                <div className='product-details'
                >
                    <span className='product-c'>{props.name2}</span>
                    <h4><a href="/">{props.subname2}</a></h4>
                    <p>{props.description2}</p>

                    <div className='product-bottom-details'>
                        <div className='product-price'><small>{props.rate2}</small>{props.discount2}</div>
                        <div className='product-links'>

                            <a href="/"><i className='fa fa-heart'></i></a>
                            <a href="/"><i className='fa fa-shopping-cart'></i></a>
                        </div>
                    </div>
                </div>



            </div>

            <div className={props.className3}>
                <div className='badge'>{props.heading3}</div>
                <div className='product-t'>

                    <img src={props.image3} alt="image" />

                </div>
                <div className='product-details'
                >
                    <span className='product-c'>{props.name3}</span>
                    <h4><a href="/">{props.subname3}</a></h4>
                    <p>{props.description3}</p>

                    <div className='product-bottom-details'>
                        <div className='product-price'><small>{props.rate3}</small>{props.discount3}</div>
                        <div className='product-links'>

                            <a href="/"><i className='fa fa-heart'></i></a>
                            <a href="/"><i className='fa fa-shopping-cart'></i></a>
                        </div>
                    </div>
                </div>



            </div>

            



            

        </div>


    )
}

export default ShopData