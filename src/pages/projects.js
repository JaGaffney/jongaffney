import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
            tags {
              stack
            }
            image {
              fluid(maxWidth: 400) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <SEO title="Projects" />

      <div></div>
    </Layout>
  )
}

export default ProjectsPage
