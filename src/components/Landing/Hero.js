import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import HeroImage from "../../images/hero.png"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className="hero__container">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        className="hero__image"
      />
      {/* <img src={HeroImage} alt="" className="hero__image" /> */}

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
