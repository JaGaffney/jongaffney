import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

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
  console.log(data)
  return <div></div>
}

export default Projects
