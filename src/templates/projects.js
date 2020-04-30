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
  const description = project.description.description
  const tags = project.tags.stack
  const url = project.url
  const repo = project.repo
  const video = project.video
  const status = project.status
  const imageData = project.image.fluid
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="generic-container">
        <div className="project-single__container">
          <Image
            fluid={imageData}
            alt={`${name} Poster`}
            objectFit="contain"
            objectPosition="50%"
            className="single-project-container__image large-image"
          />
          <div className="project-single__content">
            <h1>{name}</h1>
            <div className="project-single__content-links">
              <span>Status: {status}</span>
              <div>
                <a href={repo}>
                  <FiGithub
                    vertical-align="middle"
                    horizontal-align="middle"
                    size="2.5rem"
                  />
                </a>
                <a href={url}>
                  <FiGlobe
                    vertical-align="middle"
                    horizontal-align="middle"
                    size="2.5rem"
                  />
                </a>
              </div>
            </div>

            <ul>
              {tags.map((item, index) => (
                <li key={index + item}>{item}</li>
              ))}
            </ul>

            <p>{description}</p>

            <div className="project-single__content-video">{video}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
