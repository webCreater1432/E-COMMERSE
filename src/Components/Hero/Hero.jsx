import React from 'react'
import "./Hero.css"
import banner from "../../assets/Images/bg0.gif"
const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default Hero