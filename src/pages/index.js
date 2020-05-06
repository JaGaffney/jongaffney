import React from "react"

import Layout from "../components/landing"
import SEO from "../components/seo"

import Hero from "../components/Landing/Hero"
import About from "../components/Landing/About"
import Apps from "../components/Landing/Apps"
import Showreel from "../components/Landing/Showreel"
import ContactBanner from "../components/Landing/ContactBanner"
import Projects from "../components/Projects/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Jon Gaffney" />
    <Hero />
    <About />
    <Apps />
    <Projects />
    <Showreel />
    <ContactBanner />
  </Layout>
)

export default IndexPage
