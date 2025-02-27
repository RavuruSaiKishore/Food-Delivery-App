import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      {/* <div className='row'>
        <h3 className='logo'>Kishore</h3>
        <p className='para'> food we deliver</p>
      </div> */}
      <img className='profile' src={assets.crop_profile} alt="" />
    </div>
  )
}

export default Navbar;
