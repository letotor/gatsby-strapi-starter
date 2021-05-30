/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
 import "../assets/stylesheets/layout.scss"
import Main from './Main'

// import Jobs from './Jobs'
import siteConfig from '../data/siteConfig'

import Formations from './Formations'
// import ImageJs from '../templates/image'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          phone
          address
        }
      }
    }
  `)


  // MuiThemeProvider theme={theme}
  let {title, phone, address} = data.site.siteMetadata
  return (
    <>

      <Header siteTitle={title} />
      <h1>gatsby</h1>

      {/* <main>{children}</main> */}
      {/* <Formations /> */}
      <Main></Main>
      {/* <ImageJs/> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
