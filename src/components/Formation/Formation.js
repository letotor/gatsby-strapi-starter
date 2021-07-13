import React, { useState, useEffect } from "react"

// import {
//   CardWrapper,
//   CardHeader,
//   CardHeading,
//   CardBody,
//   CardIcon,
//   CardFieldset,
//   CardInput,
//   CardOptionsItem,
//   CardOptions,
//   CardOptionsNote,
//   CardButton,
//   CardLink,
// } from "../Card"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,MDBRipple,MDBCardImage,
  MDBBadge,
} from "mdb-react-ui-kit"
// import { Card, CardTitle, CardText, Button, Badge} from "reactstrap"
import {CardWrapper} from "./FormationStyle"



const Formation = (props) => {
  const {

// const [state setState]=state({strapiId: "",logo:"", type:"", visible:true, where:"", year:"" ,title:""})
  // //desctructuriqqng
  
 
  formationData: {strapiId,logo, type, visible, where, year ,title},
} = props

console.log("---->formation : ", strapiId, logo, type, title, visible, where, year, )
  const [state, setState] = useState({
      isVisible:visible,
      hasLogo : logo===null?false:true,
  })

 let srcLogo = ""
  if (state.hasLogo){
    // const {
    //   childImageSharp: { original:{src,}, },
    // } = { logo }


      // console.log("chemin logo",logo.childImageSharp.original.src)
      srcLogo=logo.childImageSharp.original.src
      console.log("chemin logo", srcLogo)
    }
  //  const {logo: {
  //           childImageSharp: {
  //             original: {
  //               src}}} }=logo

  //  console.log("--->fluid", src)

  // console.log("titre------>", { props })
  console.log("e------> state : ", state)

  return (
    <>
      {state.isVisible && (
        <CardWrapper>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            {srcLogo && <MDBCardImage src={srcLogo} fluid alt="..." />}
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>{where}</MDBCardText>
            <MDBBtn href="#">{type}</MDBBtn>
            <MDBBadge
              className="pull-right m-2"
              color="success"
              // backgroundColor="purple"
            >
              {year}
            </MDBBadge>
            <MDBBadge
              className="pull-right m-2"
              color="primary"
              // backgroundColor="purple"
            >
              {type}
            </MDBBadge>
          </MDBCardBody>
        </CardWrapper>
      )}
    </>
  )
}

export default Formation
