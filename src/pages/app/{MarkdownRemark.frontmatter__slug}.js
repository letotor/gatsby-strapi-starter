import React from "react"
import { graphql } from "gatsby"

export default   ({data}) => {

 const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        Date
        slug
        Title
      }
    }
  }
`

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.Title}</h1>
        <h2>{frontmatter.Date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}



  