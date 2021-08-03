/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */


import React, { useState, useEffect } from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { useStaticQuery, graphql } from "gatsby"


import NavBarre from "./NavBarre"
import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero/HeroCore"
import Main from "./Main"

 import ScrollUp from "./ScrollUp"


import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./ThemeGlobalStyle/globalStyle"
import { lightTheme, darkTheme } from "./ThemeGlobalStyle/themes"

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
const StyledNavbarre =styled(NavBarre)`
  color:red;
`
  const StyledSwitch = styled(Switch).attrs((props) => ({}))``
 


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

      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />

        {siteConfig.enableDarkmode && (
          <SwitchWrapper>
            <StyledSwitch
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

        <MDBContainer>
          <div className="justify-content-md-center">
            <Header
              headerImg="DGwebCreation" //{siteConfig.siteCover}
              authorName={siteConfig.authorName}
              monurl="url"
              urlCurrent={""} /*{url_Function}*/
            />

            <Hero
              titre={siteConfig.siteTitle}
              sousTitre={siteConfig.subTitle}
              //  avatar={withPrefix(siteConfig.authorAvatar)}
            />

            <Main />
          </div>
        </MDBContainer>
        {/* </div> */}
        <Footer />
        <ScrollUp />
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
