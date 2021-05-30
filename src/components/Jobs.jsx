import React,{useState} from "react"
import { useStaticQuery, graphql } from "gatsby"



const Jobs = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allStrapiJobs(sort: { fields: strapiId, order: ASC }) {
  //       nodes {
  //         strapiId
  //         company
  //         date
  //         position
  //         desc {
  //           name
  //         }
  //       }
  //     }
  //   }
  // `)
  const [value, setValue]=useState(0)
  // const { allStrapiJobs: {
  //       nodes: jobs},}=data
  //       const {company,date,position,desc}=jobs[0]

  // console.log("aJobs -------->", company, date, position)
 console.log('->',value);
  
  return (
    <section className="jobs">
      <h2>JOB COMMPONENT</h2>
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
    </section>
  )
    
    // </>)
}


export default Jobs
