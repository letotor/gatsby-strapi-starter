import React from "react"
import Menu from "../Menu"
import { MDBRow, MDBCol, MDBTypography, MDBBtn } from "mdbreact"
import { useStaticQuery, graphql } from "gatsby"
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
    const HeroCore = ({ titre, subTitle }) => {
    /**
     * Requete GRaphQl pour recuperer l'image Cover et l'avatar (photo de profil)
     */
      const dataImage = useStaticQuery(graphql`
        {
          strapiHero {
            avatar {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  transformOptions: { grayscale: false, fit: FILL, rotate: 3 }
                )
              }
            }
            strapiId
            title
            subtitle
            isVisible
            cover {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      `)

      /**
       * Photo identite
       */
      const avatasr =
        dataImage.strapiHero.avatar.childImageSharp.gatsbyImageData.images
          .fallback.src

          /**
           * Arriere plan 
           */
      const coversrc =
        dataImage.strapiHero.cover.childImageSharp.gatsbyImageData.images
          .fallback.src
    

  /**
   * Render
   */
  return (
    <>
      {/* /** Test code de retour  */ }
      <pre>{JSON.stringify(dataImage, null, 4)}</pre>
    
      <Cover img={coversrc}>
        {/* className="p-3 p-lg-4" */}
        <MDBRow>
          {/* //image et ecnadreé */}
          <MDBCol lg="4" md="5">
            {/* <div className="col-lg-4 col-md-5"> */}
            <Avatar
              className="hover-effect  shadow-sm "
              height="370"
              background={'coversrc'}
            >
              {/*   avatar bg-white  */}
              <img src={avatasr} width="220" height="220" alt="avatar" />
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
              {titre}
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
