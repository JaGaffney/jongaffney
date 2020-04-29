import { Link } from "gatsby"
import React from "react"
import LogoImage from "../images/logo_2.svg"

import Navbar from "./Header/Navbar"

const Header = () => (
  <header className="hero__container-icon">
    <div className="header-container">
      <Link to="/" className="header-container__logo">
        <img src={LogoImage} alt="logo" />
      </Link>
      <nav className="header-container__nav">
        <ul>
          <Navbar />
        </ul>
        {/* <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <a href="https://github.com/JaGaffney">Github</a>
        <Link to="/contact">Contact</Link> */}
      </nav>
    </div>
  </header>
)
export default Header
