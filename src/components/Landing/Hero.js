import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import LogoImage from "../../images/logo_2.svg"

import Navbar from "../Header/NavbarLanding"

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
    <header className="hero__container hero__container-icon">
      <div className="hero__container-navbar">
        <Navbar />
      </div>

      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        className="hero__image"
      />
      <div className="hero__content-container">
        <div className="hero__content">
          <div className="hero__content-text">
            <img src={LogoImage} alt="logo" style={{ minHeight: "2.1rem" }} />
            <h1 className="h1-underline__title">
              <span>Fullstack</span> <span>web developer</span>
            </h1>
            <h3>
              From static sites to progressive web applications and everything
              in-between
            </h3>
          </div>
          <a href="#landing-projects" className="hero__cta-button">
            View latest projects
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
