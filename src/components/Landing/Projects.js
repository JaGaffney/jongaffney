import React from "react"

import ProjectComponent from "./ProjectComponent"

import CivImage from "../../images/civ.svg"
import AfnafImage from "../../images/afnaf.svg"
import LandingImage from "../../images/landing.svg"

const Projects = () => {
  const webApp = {
    name: "Web Applications",
    description:
      "Nostrud consectetur velit culpa est velit consequat dolore reprehenderit.",
    image: CivImage,
    tags: ["React", "Electron", "Flask", "Django", "AWS"],
  }
  const dynamicSites = {
    name: "Dynamically driven websites",
    description:
      "Nostrud consectetur velit culpa est velit consequat dolore reprehenderit. Nostrud consectetur velit culpa est velit consequat dolore reprehenderit.",
    image: AfnafImage,
    tags: ["React", "Django", "Laravel", "MongoDB", "MySQL"],
  }
  const staticSites = {
    name: "Statically generated websites",
    description:
      "Nostrud consectetur velit culpa est velit consequat dolore reprehenderit.",
    image: LandingImage,
    tags: [, "JAM stack", "Gatsby", "AWS S3", "Netlify"],
  }

  return (
    <div className="landing-projects">
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
    </div>
  )
}

export default Projects
