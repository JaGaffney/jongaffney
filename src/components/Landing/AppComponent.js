import React from "react"

const AppComponent = props => {
  return (
    <article className="landing-apps-component">
      <div className="landing-apps-component__content-title">
        <h1 className="h1-underline__large">{props.name}</h1>
      </div>
      <img src={props.image} alt="" className="landing-apps-component__image" />

      <div className="landing-apps-component__content-data">
        <p>{props.description}</p>
        <ul>
          {props.tags.map((item, index) => {
            return <li key={item + index}>{item}</li>
          })}
        </ul>
      </div>
      <div className="landing-apps-component__banner hero-pattern__light"></div>
    </article>
  )
}

export default AppComponent
