import React  from 'react'
import { useStaticQuery, graphql } from "gatsby"
// import DarkTheme from './DarkTheme'
import Menu from './Menu'
// import avatar from '../images/avatar.jpg'
// import Aos from"aos";

import cv from "../upload/cv/openclassrooms/cv-vdg.pdf"
// import siteConfig from "../data/siteConfig/";
// import  from siteConfig.cv



const Hero = ({titre,subTitle}) => {
    // importaa from avatar;
    
      const dataImage = useStaticQuery(graphql`
        {
          allImageSharp(
            filter: { gatsbyImageData: {} }
            limit: 1
            sort: { fields: fixed___src }
          ) {
            nodes {
              original {
                src
              }
            }
          }
        }
      `)

  // const {avatarImage:url} = avatar;
console.log(dataImage)
    return (
      <>
        {/* <h1>HERO COMPONENT</h1>   */}
        <div className="cover-bg p-3 p-lg-4 text-white">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="avatar hover-effect bg-white shadow-sm p-1">
                {/* <img src={avatar} width="200" height="200" alt="avatar" /> */}
              </div>
            </div>
            <div className="col-lg-7 col-md-7 text-center text-md-start">
              <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">
                {titre}
              </h2>
              <p data-aos="fade-left" data-aos-delay="100">
                {subTitle}
              </p>
              <div
                className="d-print-none"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <a
                  className="btn btn-light  text-dark shadow-sm mt-1 me-1"
                  href={cv}
                  target="_blank"
                >
                  Télécharger CV
                </a>
                <a className="btn btn-success shadow-sm mt-1" href="#contact">
                  Me contacter
                </a>
              </div>
            </div>
            {/* <DarkTheme></DarkTheme> */}
          </div>
        </div>

        <Menu></Menu>
      </>
    );
}

export default Hero
