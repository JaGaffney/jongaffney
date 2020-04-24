import { Link } from "gatsby"
import React from "react"
import LogoImage from "../images/logo.svg"

const Header = () => (
  <header>
    <Link to="/">
      <img src={LogoImage} alt="logo" />
    </Link>
    <nav>
      <button href="/projects">Projects</button>
      <button href="/about">About</button>
      <button href="/about">Github</button>
    </nav>
  </header>
)
export default Header
