import React, { useState, useEffect } from "react"

import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink,
} from "./Card"

import { Card, CardTitle, CardText, Button, Badge} from "reactstrap"
import styled from 'styled-components'



const Formation = (props) => {

  // //desctructuriqqng
  
 
const {
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
      <CardWrapper className="justify-content-sm-start">
        {/* <pre>{JSON.stringify({props}, null, 8)}</pre> */}
        {/* {state.hasLogo && <pre>{JSON.stringify(srcSet, null, 8)}</pre>} */}

        {state.isVisible && (
          <>
            <div className="d-flex justify-content-between m-2">
              <Badge
                className="pull-right m-2"
                color="success"
                // backgroundColor="purple"
              >
                {year}
              </Badge>
              <Badge
                className="pull-right m-2"
                color="primary"
                // backgroundColor="purple"
              >
                {type}
              </Badge>
            </div>
            <CardIcon>
              {srcLogo && (
                <img
                  src={srcLogo}
                  alt=""
                  srcSet={srcLogo}
                  width="100%"
                  height="200px"
                  object-fit="contain"
                />
              )}
            </CardIcon>
            <CardHeader className="text-center m-1">{title}</CardHeader>
            <CardBody className="text-center m-1">{where}</CardBody>
          </>
        )}
      </CardWrapper>
    </>
  )
}

export default Formation
