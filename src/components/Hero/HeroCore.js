import React,{useState,useEffect} from "react"
import Menu from "../Menu"
import { MDBRow, MDBCol, MDBTypography, MDBBtn } from "mdbreact"
import { useStaticQuery, graphql } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import cv from "../../upload/cv/openclassrooms/cv-vdg.pdf"

/**
 * Style import
 */
import {
  Cover,
  Avatar,
  TitleStyle,
  BoutonStyle,
  BoutonContactStyle,
} from "./HeroStyle"

 

    /**
     * Function qui crée le Hero du CV ( bannier avec image +avatar + import du menu)
     */
    const HeroCore = ({ titre, sousTitre }) => {
      const [title, setTitle] = useState(titre)
      const [subTitle, setSubtitle] = useState(sousTitre) // Variable d’état 2
      const [color, setColor] = useState("gray") // Variable d’état 2
     
      /**
       * Requete GRaphQl pour recuperer l'image Cover et l'avatar (photo de profil)
       */

   
     const data = useStaticQuery(graphql`
       {
         strapiHeader {
           color
           subtitle
           title
           isPrintable
           isVisible
           cover {
             publicURL
             childImageSharp {
               gatsbyImageData(placeholder: TRACED_SVG)
             }
           }
           avatar {
             publicURL
             childImageSharp {
               gatsbyImageData(
                 placeholder: TRACED_SVG
                 width: 235
                 height: 255
                 transformOptions: {
                   grayscale: true
                   fit: COVER
                   cropFocus: CENTER
                 }
               )
             }
           }
         }
       }
     `)

    useEffect(() => {
     setTitle(data.strapiHeader.title);
     setSubtitle(data.strapiHeader.subtitle);
     setColor(data.strapiHeader.color)
    },[])

    
      /**
       * Render
       */
      return (
        <>
          {/* /** Test code de retour  */}
          <pre>
            {JSON.stringify(
              getImage(data.strapiHeader.cover),
              null,
              4
            )}
          </pre>
          {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
          <Cover
            color={color}
            url={
              data.strapiHeader.cover.publicURL
            }
            alt="toto"
          >
            {/* className="p-3 p-lg-4" */}
            <MDBRow>
              {/* //image et ecnadreé */}
              <MDBCol lg="4" md="5">
                {/* <div className="col-lg-4 col-md-5"> */}
                <Avatar
                  className="hover-effect  shadow-sm "
                  height="270"
                  width="270"
                  background="black"
                >
                  {/*   avatar bg-white  */}
                  {/* <img
                    src={data.strapiHeader.avatar.publicURL}
                    alt="avatar"
                    object-fit="cover"
                  /> */}
                  <GatsbyImage
                    image={
                      data.strapiHeader.avatar.childImageSharp.gatsbyImageData
                    }
                    alt="avatarImg"
                    object-fit="cover"
                  />
                </Avatar>
                {/* </div> */}
              </MDBCol>

              {/* Titre developpeur */}
              <MDBCol
                style={TitleStyle}
                lg="7"
                md="7"
                className="text-center text-md-start"
              >
                {/* <div className="col-lg-7 col-md-7 text-center text-md-start"> */}
                <MDBTypography
                  tag="h1"
                  className="h1 mt-2"
                  data-aos="fade-left"
                  data-aos-delay="0"
                >
                  {title}
                </MDBTypography>
                <p data-aos="fade-left" data-aos-delay="100">
                  {" "}
                  {subTitle}{" "}
                </p>

                {/* MEnu telecharger */}
                <div
                  className="d-print-none"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <a
                    className="text-dark shadow-sm mt-1 me-1"
                    href={cv}
                    target="_blank"
                  >
                    <MDBBtn style={BoutonStyle} color="success">
                      Télécharger CV
                    </MDBBtn>
                  </a>

                  <a className="shadow-sm mt-1" href="#contact">
                    <MDBBtn outline style={BoutonContactStyle} color="success">
                      Me contacter
                    </MDBBtn>
                  </a>
                </div>
                {/* </div> */}
                <Menu />
              </MDBCol>
            </MDBRow>
            {/* <MDBRow>test</MDBRow> */}
          </Cover>
        </>
      )
    }

export default HeroCore
