import React from "react"

import AppComponent from "./AppComponent"

import CivImage from "../../images/civ.svg"
import AfnafImage from "../../images/afnaf.svg"
import LandingImage from "../../images/landing.svg"

const Apps = () => {
  const webApp = {
    name: "Web applications",
    description:
      "Web application created for use on desktop, web or both. Allows for a web based UI to be hooked up to any backend you need and bundled into a single application.",
    image: CivImage,
    tags: ["React", "Electron", "Flask", "Django", "AWS"],
  }
  const dynamicSites = {
    name: "Data driven",
    description:
      "Websites created with the purpose of being hooked up to a database. Ideal for e-commerce, stock-management or data analysis websites.",
    image: AfnafImage,
    tags: ["React", "Django", "Laravel", "MongoDB", "MySQL"],
  }
  const staticSites = {
    name: "Statically generated",
    description:
      "Static websites that are easy to host and display your message, to your customers. Created to allow for great search engine optimisation while also being lighting fast while also allowing for real time updates from a database. Perfect for landing or brochure based websites.",
    image: LandingImage,
    tags: ["JAM stack", "Gatsby", "AWS-S3", "Netlify"],
  }

  return (
    <section className="landing-apps" id="landing-services">
      <AppComponent
        image={webApp.image}
        name={webApp.name}
        description={webApp.description}
        tags={webApp.tags}
      />
      <AppComponent
        image={dynamicSites.image}
        name={dynamicSites.name}
        description={dynamicSites.description}
        tags={dynamicSites.tags}
      />
      <AppComponent
        image={staticSites.image}
        name={staticSites.name}
        description={staticSites.description}
        tags={staticSites.tags}
      />
    </section>
  )
}

export default Apps
