import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FiGithub, FiYoutube, FiGlobe } from "react-icons/fi"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      name
      description {
        description
      }
      url
      repo
      status
      video
      type
      tags {
        stack
      }
      image {
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const Projects = ({ data }) => {
  const project = data.contentfulProjects

  const name = project.name
  // const description = project.description
  //   ? data.description.description
  //   : "none set"
  const slug = project.slug
  const tags = project.tags.stack
  const url = project.url
  const repo = project.repo
  const video = project.video
  const status = project.status
  const imageData = project.image.fluid

  console.log(project)
  return (
    <Layout>
      <SEO title="Contact" />

      <div>
        <h1>Coming soon: {name}</h1>

        <ul>
          <li>
            <a href={repo}>
              <FiGithub
                vertical-align="middle"
                horizontal-align="middle"
                size="1.5rem"
              />
            </a>
          </li>
          <li>
            <a href={url}>
              <FiGlobe
                vertical-align="middle"
                horizontal-align="middle"
                size="1.5rem"
              />
            </a>
          </li>
          <li>
            <a href={repo}>
              <FiYoutube
                vertical-align="middle"
                horizontal-align="middle"
                size="1.5rem"
              />
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Projects
