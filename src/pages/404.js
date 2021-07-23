import React from "react"

import Layout from "../components/layoutcv"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Objet non trouvé</h1>
    <p>L'url demandé n'existe pas .... </p>
  </Layout>
)

export default NotFoundPage
