import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProjectComponent from "./ProjectComponent"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProjects {
        edges {
          node {
            name
            slug
            order
            elevator {
              elevator
            }
            url
            repo
            video
            tags {
              stack
            }
            image {
              fluid(maxWidth: 600) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allContentfulProjects.edges

  let sortedByRankValues = Object.keys(projects)
    .map(item => {
      return {
        name: projects[item].node.name,
        elevator: projects[item].node.elevator,
        slug: projects[item].node.slug,
        tags: projects[item].node.tags,
        image: projects[item].node.image,
        order: projects[item].node.order,
      }
    })
    .sort((a, b) => a.order - b.order)
    .filter(item => item.name !== "test")
  sortedByRankValues.pop()
  sortedByRankValues.pop()

  return (
    <div className="landing-projects" id="landing-projects">
      <div style={{ margin: "auto", width: "80%" }}>
        <h1 className="h1-underline__large">Recent Projects</h1>
      </div>

      <div className="landing-projects-container">
        {sortedByRankValues.map((item, index) => {
          return (
            <React.Fragment key={index + "project"}>
              <ProjectComponent data={item} />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
