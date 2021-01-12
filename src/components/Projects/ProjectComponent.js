import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectComponent = ({ data }) => {
  const name = data.name
  let elevator = data.elevator ? data.elevator.elevator : "none set"
  elevator = truncate(elevator, 300, true)
  const slug = data.slug
  let tags = data.tags.stack
  tags = tagTruncate()
  const imageData = data.image.fluid

  function tagTruncate() {
    let newArray = tags
    if (tags.length > 4) {
      let cutArray = newArray.slice(0, 4)
      newArray = [...cutArray, "..."]
    }
    return newArray
  }

  function truncate(str, n, useWordBoundary) {
    if (str.length <= n) {
      return str
    }
    const subString = str.substr(0, n - 1) // the original check
    return (
      (useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(" "))
        : subString) + "..."
    )
  }
  return (
    <Link
      to={`/projects/${slug}/`}
      className="project-contents-inner"
      aria-label={`Link to ${name} project page`}
    >
      <article className="single-project-container">
        <div className="single-project-container__overlay"></div>
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
      </article>
    </Link>
  )
}

export default ProjectComponent
