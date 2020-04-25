import React from "react"
import { Link } from "gatsby"

const ProjectComponent = props => {
  return (
    <div className="projects-component">
      <div className="projects-component__content-title">
        <Link to="/projects">
          <h1>{props.name}</h1>
        </Link>
      </div>
      <img src={props.image} alt="" className="projects-component__image" />

      <div className="projects-component__content-data">
        <p>{props.description}</p>
        <ul>
          {props.tags.map((item, index) => {
            return <li key={item + index}>{item}</li>
          })}
        </ul>
      </div>
      <div className="projects-component__banner"></div>
    </div>
  )
}

export default ProjectComponent
