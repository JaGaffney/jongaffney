import React from "react"

import ProjectComponent from "./ProjectComponent"

import CivImage from "../../images/civ.svg"
import AfnafImage from "../../images/afnaf.svg"
import LandingImage from "../../images/landing.svg"

const Projects = () => {
  const webApp = {
    name: "Web Applications",
    description: "Web application that allow for desktop, web or both use.",
    image: CivImage,
    tags: ["React", "Electron", "Flask", "Django", "AWS"],
  }
  const dynamicSites = {
    name: "Data driven",
    description:
      "Websites created [ADD SOME CONTENT, Placeholder]   , Ideal for e-commerce or data analysis websites",
    image: AfnafImage,
    tags: ["React", "Django", "Laravel", "MongoDB", "MySQL"],
  }
  const staticSites = {
    name: "Statically generated",
    description:
      "Static websites that was easy to host and display your message to your customers. Created to allow for great search engine optimisation while also being lighting fast while also allowing for real time updates from a database. Perfect for landing or brochure based websites.",
    image: LandingImage,
    tags: ["JAM stack", "Gatsby", "AWS-S3", "Netlify"],
  }

  return (
    <section className="landing-projects">
      <ProjectComponent
        image={webApp.image}
        name={webApp.name}
        description={webApp.description}
        tags={webApp.tags}
      />
      <ProjectComponent
        image={dynamicSites.image}
        name={dynamicSites.name}
        description={dynamicSites.description}
        tags={dynamicSites.tags}
      />
      <ProjectComponent
        image={staticSites.image}
        name={staticSites.name}
        description={staticSites.description}
        tags={staticSites.tags}
      />
    </section>
  )
}

export default Projects
