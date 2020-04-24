import React from "react"

import HeroImage from "../../images/hero.png"

const Hero = () => {
  return (
    <header className="hero__container">
      <img src={HeroImage} alt="" className="hero__image" />

      <div className="hero__content-container">
        <div className="hero__content">
          <div className="hero__content-text">
            <h1>
              Fullstack <span>web Developer</span>
            </h1>
            <h3>
              From static sites to full web applications and everything in
              between
            </h3>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
