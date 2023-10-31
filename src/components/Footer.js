import { Link } from "react-router-dom"
import "./footerStyles.css"
import React from 'react'


function Footer() {
  return (
    <div className="footer">
<div className="top">
    <div><h1>Dewy</h1>
    <p>Floral Expressions</p></div>
    <div>
        <a href="/"></a>
        <i className="fa-brands fa-facebook-square"></i>
        <a href="/"></a>
        <i className="fa-brands fa-instagram-square"></i>
        <a href="/"></a>
        <i className="fa-brands fa-twitter-square"></i>
        <a href="/"></a>
        <i className="fa-brands fa-youtube-square"></i>
    </div>
</div>
<div className="bottom">

    <div>
        <h4>NAVIGATE</h4>
       <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/service">Shop</a>

    </div>
    <div>
        <h4>OFFICIAL</h4>
        <a href="/">Privacy</a>
        <a href="/">Terms</a>
        <a href="/">Accessibility</a>
        <a href="/">FAQ</a>

    </div>
    <div>
        <h4>PROJECT</h4>
        <a href="/">Changelog</a>
        <a href="/">Status</a>
        <a href="/">License</a>
        <a href="/">All Versions</a>

    </div>
    <div>
        <h4>COMMUNITY</h4>
        <a href="/">Project</a>
        <a href="/">Issues</a>
        <a href="/">GitHub</a>
        <a href="/">Twitter</a>

    </div>
</div>
    </div>
  )
}

export default Footer