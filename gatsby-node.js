exports.createPages = async ({ actions, graphql, reporter }) => {
  const results = await graphql(`
    {
      allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (results.error) {
    reporter.panic("Error loading data")
    return
  }

  const projects = results.data.allContentfulProjects.edges

  projects.forEach(({ node: { slug } }) => {
    actions.createPage({
      path: `/projects/${slug}/`,
      component: require.resolve("./src/templates/projects.js"),
      context: { slug },
    })
  })
}
