import React from "react"

import { FiGithub, FiYoutube } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer-container">
      <ul>
        <li>
          <a href="https://github.com/JaGaffney/" aria-label="Link to GitHub">
            <FiGithub
              vertical-align="middle"
              horizontal-align="middle"
              size="2.5em"
            />
            <span className="footer-link">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jon-gaffney-13a100118/"
            aria-label="Link to my LinkedIn"
          >
            <FaLinkedinIn
              vertical-align="middle"
              horizontal-align="middle"
              size="2.5em"
            />
            <span className="footer-link">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC5zomM4cq6RMJSwg5MV_SBg/"
            aria-label="Link to Youtube"
          >
            <FiYoutube
              vertical-align="middle"
              horizontal-align="middle"
              size="2.5em"
            />
            <span className="footer-link">YouTube</span>
          </a>
        </li>
      </ul>
      {/* <ul>
        <li>
          <Link to="/projects" aria-label="Link to Projects page">
            <GoCode
              vertical-align="middle"
              horizontal-align="middle"
              size="2.5em"
            />
            <span className="footer-link">Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/about" aria-label="Link to About page">
            <BsPersonLinesFill
              vertical-align="middle"
              horizontal-align="middle"
              size="2.6em"
            />
            <span className="footer-link">About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" aria-label="Link to Contact page">
            <FaMailBulk
              vertical-align="middle"
              horizontal-align="middle"
              size="2.5em"
            />
            <span className="footer-link">Contact</span>
          </Link>
        </li>
      </ul> */}

      <div className="footer-copyright footer-info">
        <span>Jon Gaffney © 2020</span>
        <span>ABN: 30 488 651 187</span>
      </div>
      <div className="footer-copyright">
        <span>
          All images, websites and software are copyright of their respective
          owners.
        </span>
      </div>
    </div>
  )
}

export default Footer
