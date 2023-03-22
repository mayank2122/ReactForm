import React from 'react'
import logo from '../assets/images/logo.png'
import "../Components/allCss.css"

const Header = () => {
  return (
    <div className='container'>
      <img src={logo} height={160} alt=''></img>
      <p style={{fontWeight:"bolder"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered .</p>
    </div>
  )
}

export default Header
