import React from "react"

const ProjectComponent = props => {
  return (
    <div className="projects-component">
      <img src={props.image} alt="" className="projects-component__image" />
      <h1 className="projects-component__content-title">{props.name}</h1>
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
