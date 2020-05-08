import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="generic-container">
      <div>
        <h1 className="h1-underline__large">NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
