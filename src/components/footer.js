import React from "react"

import { FiGithub, FiGlobe, FiYoutube } from "react-icons/fi"
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
          </a>
        </li>
        <li>
          <a href="https://jongaffney.tech/" aria-label="Link to Youtube">
            <FiYoutube
              vertical-align="middle"
              horizontal-align="middle"
              size="2.5em"
            />
          </a>
        </li>
      </ul>
      <div className="footer-copyright">
        <span>
          © Jon Gaffney{" "}
          <a href="https://jongaffney.tech/">https://jongaffney.tech/</a>
        </span>
      </div>
    </div>
  )
}

export default Footer
