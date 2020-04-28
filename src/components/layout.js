import React from "react"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <footer className="hero-pattern__light">
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Layout
