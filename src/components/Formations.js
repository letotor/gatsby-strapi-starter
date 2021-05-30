import React, { useState, Fragment } from "react"
 import Formation from "./Formation"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'


const Formations = () => {

const CardFormation = styled.div`

    
    padding-bottom: 0px;
`


 const data = useStaticQuery(graphql`
   {
     allStrapiFormations(sort: { order: DESC, fields: year }) {
       nodes {
         strapiId
         visible
         type
         title
         where
         year
         logo {
           childImageSharp {
             original {
               src
             }
           }
         }
       }
     }
   }
 `)

       const [value, setValue] = useState(0)
   console.log("formations->", data)
    const {allStrapiFormations:{nodes:formations},} =data;
  // let [strapiId,visible, title,where,year]=formations[0]
   console.log('--------------->formation',formations)
  return (
    <Fragment>
      {/* <!-- Formations --> */}
      <hr className="d-print-none-off" />
      <div className="education-section px-3 px-lg-4 pb-4">
        <h2
          id="formation"
          className="h3 mb-4 text-uppercase tracking-in-contract"
        >
          Diplomes - formations
        </h2>
        {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
        <CardFormation className="d-flex justify-content-start ">
          {formations &&
            formations.map((formation, index) => (
              <Formation
                className="col-sm-3"
                key={formation.strapiId}
                formationData={formation}
              />
            ))}
        </CardFormation>
      </div>
    </Fragment>
  )
}

export default Formations
