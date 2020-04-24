import React, { useState, useEffect } from "react"

import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [windowLoc, setWindowLoc] = useState("")

  useEffect(() => {
    setWindowLoc(window.location.pathname)
  }, [])

  return (
    <>
      {windowLoc !== "/" ? (
        <Header siteTitle={data.site.siteMetadata.title} />
      ) : null}
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
