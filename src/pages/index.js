import React from "react"

import Layout from "../components/landing"
import SEO from "../components/seo"

import Hero from "../components/Landing/Hero"
import About from "../components/Landing/About"
import Projects from "../components/Landing/Projects"
import Showreel from "../components/Landing/Showreel"

const IndexPage = () => (
  <Layout>
    <SEO title="Jon Gaffney" />
    <Hero />
    <About />
    <Projects />
    <Showreel />
  </Layout>
)

export default IndexPage
