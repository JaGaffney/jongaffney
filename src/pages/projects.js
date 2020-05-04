import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectComponent from "../components/Projects/ProjectComponent"

const ProjectsPage = () => {
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

  return (
    <Layout>
      <SEO title="Projects" />

      <div className="generic-container">
        {projects.map((item, index) => {
          if (item.node.name === "test") {
            return null
          }
          return (
            <div className="project-contents-inner" key={index}>
              <ProjectComponent data={item.node} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default ProjectsPage
