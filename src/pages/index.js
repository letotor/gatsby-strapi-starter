import React,{useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AOS from 'aos'

import styled from "styled-components"
import "../assets/css/css/bootstrap.min.css"
import "../assets/css/css/style.css"
import "../assets/css/css/site.css"
import "../assets/css/css/main.css"
import "../assets/css/css/dark-theme.css"
import "../assets/css/css/print.css"
import "../assets/css/css/aos.css"

import scrollTo from "gatsby-plugin-smoothscroll"
let StyledBackground = styled.div`
  background-color: linear-gradient(to bottom, #598fc6 0, #fff 100%);
`

const  Index = () => {

  useEffect(() => {
    console.log("use effect aos")
    AOS.init({
      anchorPlacement: "top-left",
      duration: 1300,
    })
    // AOS.init({ disable: true });
  }, [])


  return (
    <>
      <SEO
        description="Cv V de GERMAIN strapi gatsby"
        lang="fr"
        title="CV Victor de GERMAIMN gatsby strapi"
      />
      <Layout>
        {/* <Button>
      <FaHome />
    </Button>


      <Button
        to="https://github.com/jeremylynch/gatsby-strapi-starter"
        className="btn btn-primary btn-lg"
      >
        <FaGithub className="mr-1" />
        View on Github
      </Button> */}
      </Layout>
    </>
  )
}

export default Index
