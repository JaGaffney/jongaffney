import React from "react"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Layout
