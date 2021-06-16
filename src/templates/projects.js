import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { FiGithub, FiGlobe } from "react-icons/fi"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      name
      description {
        description
      }
      elevator {
        elevator
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
  let titleName = val => val.charAt(0).toUpperCase() + val.slice(1)

  const project = data.contentfulProjects
  const name = project.name
  const description = project.description.description
  const descriptionSplit = description.split("\n")
  const elevator = project.elevator.elevator
  const tags = project.tags.stack
  const url = project.url
  const repo = project.repo
  const video = project.video
  const status = project.status
  const imageData = project.image.fluid

  const code = false

  return (
    <Layout>
      <div className="project-single__container">
        <div className="project-single__info">
          <h1 className="h1-underline__small">{name}</h1>

          <div className="project-single__content-links">
            <span>Status: {status}</span>
            <div>
              {repo && (
                <a href={repo}>
                  <FiGithub
                    vertical-align="middle"
                    horizontal-align="middle"
                    size="2.5rem"
                  />
                </a>
              )}
              {url && (
                <a href={url}>
                  <FiGlobe
                    vertical-align="middle"
                    horizontal-align="middle"
                    size="2.5rem"
                  />
                </a>
              )}
            </div>
          </div>

          <p>{elevator}</p>
          <ul>
            {tags.map((item, index) => (
              <li key={index + item}>{item}</li>
            ))}
          </ul>
        </div>

        <Image
          fluid={imageData}
          alt={`${name} Poster`}
          objectFit="cover"
          objectPosition="0% 50%"
          className="project-single__content__image large-image"
        />

        <div className="project-single__content">
          <h1 className="h1-underline__small">What is it?</h1>
          {descriptionSplit.length > 1 ? (
            descriptionSplit.map((item, index) => {
              if (item === "") {
                return null
              } else {
                return <p key={index + "-description"}>{item}</p>
              }
            })
          ) : (
            <p>{description}</p>
          )}

          {video && (
            <>
              <div className="spacer"></div>
              <h1 className="h1-underline__small">Videos</h1>
              <p>
                <a href={video}>{video}</a>
              </p>
              <div className="project-single__content-video">
                <iframe
                  src={video}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={name}
                ></iframe>
              </div>
            </>
          )}

          {code && (
            <>
              <div className="spacer"></div>
              <h1 className="h1-underline__small">Intresting code snippet</h1>
              {descriptionSplit.length > 1 ? (
                descriptionSplit.map((item, index) => {
                  if (item === "") {
                    return null
                  } else {
                    return <p key={index + "-description"}>{item}</p>
                  }
                })
              ) : (
                <p>{description}</p>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
