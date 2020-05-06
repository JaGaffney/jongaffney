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

  const sortedByRankValues = Object.keys(projects)
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

  return (
    <div className="generic-container" id="landing-projects">
      {sortedByRankValues.map((item, index) => {
        if (item.name === "test") {
          return null
        }
        return (
          <React.Fragment key={index + "project"}>
            <ProjectComponent data={item} />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Projects
