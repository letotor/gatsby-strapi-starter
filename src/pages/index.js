import React from "react"

import { Container, Row, Col } from 'reactstrap'
 import Button from 'reactstrap'
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
   
    <Container className="pt-4">
      <div className="text-center">
        <h4>Tous nos services disponible</h4>
        <p className="text-muted">Adapté pour les artisans, micro entreprise et pme</p>
      </div>
    </Container>

   
    <div className="text-center py-5">
      <Button to="https://github.com/jeremylynch/gatsby-strapi-starter" className="btn btn-primary btn-lg">
        <FaGithub className="mr-1"/>
        View on Github
      </Button>
    </div>

  </Layout>
)

export default Index
