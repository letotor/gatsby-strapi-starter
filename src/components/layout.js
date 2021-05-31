/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */


import React, { useState, useEffect } from "react"
import { Container } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import AOS from "aos"


import Header from "./HeaderTest"
import Footer from "./Footer"
import Hero from "./Hero"
import Main from "./Main"
//import siteConfig from "./data/siteConfig"
// import ScrollUp from "./ScrollUp"
// import withprefix from '../gastby'

// Gestion du theme provider
// import dummyData from "./data";
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./globalStyle"
import { lightTheme, darkTheme } from "./themes"

import Switch from "react-switch"
import { FiSun, FiMoon } from "react-icons/fi"
import Version from "./Version"

import siteConfig from "../data/siteConfig"




const Layout = ({ children }) => {
  /*Dark Theme*/
  // const [videos, setVideos] = useState([]);
  const [theme, setTheme] = useState("light")
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `
  const SwitchWrapper = styled.div`
    position: fixed;
    /* display: flex; */
    align-items: center;
    padding-right: 20px;
    top: 10px;
    right: 10px;
    opacity: 0.6;
    z-index: 100;
  `

  const StyledSwitch = styled(Switch).attrs((props) => ({}))``
  /*Iniialisation d'aos
   */
  useEffect(() => {
    AOS.init({
      anchorPlacement: "top-left",
      duration: 1300,
    })
    // AOS.init({ disable: true });
  }, [])

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
  let { title, phone, address } = data.site.siteMetadata
  return (
    <>
      {/* <Header siteTitle={`${title} ${phone} ${address}`} /> */}
      {/* <main>{children}</main> */}
      {/* <Formations /> */}
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />

        {siteConfig.enableDarkmode && (
          <SwitchWrapper>
            <StyledSwitch
              className="col-lg-1 col-md-1 d-print-none"
              id="darkTrigger"
              // className="btn btn-dark  rounded-pill"
              onChange={themeToggler}
              checked={theme === "light"}
              onColor="#626262"
              offColor="#212121"
              checkedIcon={
                <IconWrapper>
                  <FiSun color="yellow" />
                </IconWrapper>
              }
              uncheckedIcon={
                <IconWrapper>
                  <FiMoon color="white" />
                </IconWrapper>
              }
            />
          </SwitchWrapper>
        )}
        {/* </div> */}
        {/* // <button onClick={}>Switch Theme</button> */}
        {/* <div className="page-content ml-3"> */}
        <Container fluid={false}>
          <Header
            headerImg={siteConfig.siteCover}
            authorName={siteConfig.authorName}
            monurl="url"
            urlCurrent={""} /*{url_Function}*/
          />
          <div className="cover shadow-lg bg-white">
            <Hero
              titre={siteConfig.siteTitle}
              subTitle={siteConfig.subTitle}
              //  avatar={withPrefix(siteConfig.authorAvatar)}
            />

            <Main></Main>
          </div>
        </Container>
        {/* </div> */}
        {/* <ScrollUp /> */}
        <Footer />
        {/* Historique des versions */}
        <hr className="d-print-none-off"></hr>
        <Version></Version>
      </ThemeProvider>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
