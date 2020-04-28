import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { GoCode } from "react-icons/go"
import { FiGithub, FiYoutube } from "react-icons/fi"
import { FaLinkedinIn, FaExternalLinkAlt, FaMailBulk } from "react-icons/fa"
import { BsPersonLinesFill } from "react-icons/bs"
import { CSSTransition } from "react-transition-group"

function NavItem(props) {
  return (
    <li className="nav-item">
      <a
        href="#"
        className="nav-icon-button"
        onClick={() => props.onOpenHandler()}
        id="hamburgerElement"
      >
        {props.icon}
      </a>
      {props.open && props.children}
    </li>
  )
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main")
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 50)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height + 50)
  }

  function DropdownItem(props) {
    return props.type === "internal" ? (
      <Link
        to={props.link}
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        aria-label={`Go to ${props.children} page`}
      >
        <span className="icon-button">{props.leftIcon}</span>
        <span>{props.children}</span>
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
    ) : (
      <a
        href={props.link ? props.link : "#"}
        className="menu-item"
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu)
          document.getElementById("hamburgerElement").focus()
        }}
        style={props.firstElement ? { marginBottom: props.firstElement } : {}}
        aria-label={`Vist my ${props.children} page`}
      >
        <span className="icon-button">{props.leftIcon}</span>
        <span>{props.children}</span>
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<GoCode />} link="/projects" type="internal">
            Projects
          </DropdownItem>
          <DropdownItem
            leftIcon={<BsPersonLinesFill />}
            link="/about"
            type="internal"
          >
            About
          </DropdownItem>
          <DropdownItem
            leftIcon={<FaMailBulk />}
            link="/contact"
            type="internal"
          >
            Contact
          </DropdownItem>
          <DropdownItem
            leftIcon={<FaExternalLinkAlt />}
            rightIcon={<FaChevronRight />}
            goToMenu="links"
          >
            Links
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "links"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<FaChevronLeft />}
            firstElement="1rem"
          ></DropdownItem>
          <DropdownItem
            leftIcon={<FiGithub />}
            link="https://github.com/JaGaffney/"
          >
            Github
          </DropdownItem>
          <DropdownItem
            leftIcon={<FaLinkedinIn />}
            link="https://www.linkedin.com/in/jon-gaffney-13a100118/"
          >
            LinkedIn
          </DropdownItem>
          <DropdownItem
            leftIcon={<FiYoutube />}
            link="https://www.youtube.com/channel/UC5zomM4cq6RMJSwg5MV_SBg/"
          >
            YouTube
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  const onOpenHandler = () => {
    setOpen(!open)
  }

  return (
    <div ref={node}>
      <NavItem
        icon={<GiHamburgerMenu />}
        onOpenHandler={onOpenHandler}
        open={open}
      >
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </div>
  )
}

export default Navbar
