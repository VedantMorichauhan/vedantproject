import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Hav.css'
import BannerImage from "../img/logo-01.png";


function Hav() {
  return (
    <>
        <div id='Nav' >
        <a className='logo'   style={{ backgroundImage: `url(${BannerImage})` }}>
        </a>
        <Link  className='padding-1' to='/'><h4>Home</h4></Link>
        <Link  className='padding-1' to='/About'><h4>About</h4></Link>
        <Link  className='padding-1' to='/Product'><h4>Product</h4></Link>
        <Link  className='padding-1' to='/Signup'><h4>Signup</h4></Link>
        <Link  className='padding-1' to='/Login'><h4>Login</h4></Link>
        </div>


        


    </>
  )
}

export default Hav
