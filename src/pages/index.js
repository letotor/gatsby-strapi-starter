import React from "react"

// import {Button} from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub, FaBolt, FaHome, FaWrench } from 'react-icons/fa'

import styled from 'styled-components'
import  '../assets/css/css/bootstrap.min.css'
import  '../assets/css/css/style.css'
import  '../assets/css/css/site.css'
import  '../assets/css/css/main.css'
import  '../assets/css/css/dark-theme.css'
import  '../assets/css/css/print.css'

let StyledBackground = styled.div`
  background: linear-gradient(to bottom,#598fc6 0,#fff 100%);
`


let Index = () => (
  <Layout>
    <SEO title="Home" />
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
)

export default Index
