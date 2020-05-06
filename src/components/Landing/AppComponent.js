import React from "react"
import { Link } from "gatsby"

const AppComponent = props => {
  return (
    <article className="landing-projects-component">
      <div className="landing-projects-component__content-title">
        <Link to="/projects">
          <h1 className="h1-underline__large">{props.name}</h1>
        </Link>
      </div>
      <img
        src={props.image}
        alt=""
        className="landing-projects-component__image"
      />

      <div className="landing-projects-component__content-data">
        <p>{props.description}</p>
        <ul>
          {props.tags.map((item, index) => {
            return <li key={item + index}>{item}</li>
          })}
        </ul>
      </div>
      <div className="landing-projects-component__banner hero-pattern__light"></div>
    </article>
  )
}

export default AppComponent