import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='foooter-content-left'>
            <img src={assets.logo} alt="" />
            <p>Our restaurant   offers a cozy atmosphere with a delightful menu.
               We serve a variety of dishes, including crispy fried chicken and savory pasta. 
               Our fresh salads are a healthy choice, and our juicy burgers are a customer favorite.
            </p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" /> 
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+9014894984</li>
              <li>contact ravurusaikishore@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024@ Kishore.com - All Rights Reserved</p>
    </div>
  )
}

export default footer
