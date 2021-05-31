// src/templates/image.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"



const image = ({ data }) => {
  // const { image } = data
  return (
    <Layout>
      <div>
        {/* <h1>{image.author}</h1> */}
        {/* <img src={image.download_url} alt={image.author} /> */}
      </div>
    </Layout>
  )
}

export default image;
