import React from 'react'
import "./FormStyle.css"
function Form() {
  return (
    <div className="container1">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">ST Road, NP12</div>
          <div className="text-two">Brooklyn 06</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+0098 9893 5647</div>
          <div className="text-two">+0096 3434 5678</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">Dewycare@gmail.com</div>
          <div className="text-two">PureDewy@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Connect With Us...</div>
        <p>We’re happy to help! Drop us a message, and we'll be in touch
</p>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-box message-box">
            <textarea placeholder="Your message"></textarea>
          </div>
          <div className="button">
            <input type="button" value="Send Now" />
          </div>
        </form>
      </div>
    </div>
  </div>
      
  )
}

export default Form