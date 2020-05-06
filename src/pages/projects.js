import React from "react"
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
    .filter(item => item.name !== "test")

  return (
    <Layout>
      <SEO title="Projects" />

      <div className="generic-container">
        <div style={{ margin: "auto", width: "80%" }}>
          <h1 className="h1-underline__small">Projects</h1>
        </div>
        {sortedByRankValues.map((item, index) => {
          return (
            <React.Fragment key={index + "project"}>
              <ProjectComponent data={item} />
            </React.Fragment>
          )
        })}
      </div>
    </Layout>
  )
}

export default ProjectsPage
