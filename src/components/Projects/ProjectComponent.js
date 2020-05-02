import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectComponent = ({ data }) => {
  const name = data.name
  const elevator = data.elevator ? data.elevator.elevator : "none set"
  const slug = data.slug
  const tags = data.tags.stack
  const imageData = data.image.fluid

  return (
    <Link to={`/projects/${slug}/`} className="single-project-container">
      <Image
        fluid={imageData}
        alt={`${name} Poster`}
        objectFit="contain"
        objectPosition="50%"
        className="single-project-container__image"
      />
      <div className="single-project-container__content">
        <h1 className="h1-underline__small">{name}</h1>
        <p>{elevator}</p>

        <ul>
          {tags.map((item, index) => (
            <li key={index + item}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export default ProjectComponent
