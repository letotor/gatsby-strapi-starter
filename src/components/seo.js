/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            google
            title
            description
            author
            siteUrl
            email
          }
        }
      }
    `
  )

  //destructuring
    // const {siteMetadata: {google, title, description, author, siteUrl, email,}} = site
      

  return (
    <Helmet>
      <title>{site.siteMetadata.description}</title>
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="keywords" content={site.siteMetadata.author} />
      <meta name="author" content={site.siteMetadata.author} />
      <meta name="url" content={site.siteMetadata.siteUrl} />
      <meta
        name="google-site-verification"
        content={site.siteMetadata.google}
      />
    </Helmet>
    // <Helmet
    //   htmlAttributes={{
    //     lang,
    //   }}
    //   title={title}
    //   titleTemplate={`%s | ${site.siteMetadata.title}`}
    //   meta={[

    //     {

    //        name: "google-site-verification",
    //       content: `${site.siteMetadata.google}`,
    //     },
    //     {
    //       name: `description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:title`,
    //       content: title,
    //     },
    //     {
    //       property: `og:description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:type`,
    //       content: `website`,
    //     },
    //     {
    //       name: `twitter:card`,
    //       content: `summary`,
    //     },
    //     {
    //       name: `twitter:creator`,
    //       content: site.siteMetadata.author,
    //     },
    //     {
    //       name: `twitter:title`,
    //       content: title,
    //     },
    //     {
    //       name: `twitter:description`,
    //       content: metaDescription,
    //     },
    //   ].concat(meta)}
    // />
  )
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
