import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Job from "../components/Job/job"

const PageBreak = styled.div`
  @media print {
    page-break-after: always;
  }
`

const Jobs = () => {
  const jobsData = useStaticQuery(graphql`
    {
      allStrapiJobs(filter: {}, sort: { fields: date, order: DESC }) {
        nodes {
          company
          position
          date
          isVisible
          isPrintable
          isPageBreakBefore
          description
          tasks {
            name
          }
          method {
            name
            color
          }
          stacks {
            name
          }
        }
      }
    }
  `)

console.log("jobsData------------>", jobsData.allStrapiJobs)
  const [value, setValue] = useState(0)

  return (
    <section className="jobs">
      {/* <!-- Experiences professionnelles --> */}
      <PageBreak />
      <hr className="page-break-after d-print-none-off" />

      <div className=" work-experience-section px-3 px-lg-4">
        <h2
          id="experience"
          className="h3 mb-4 text-uppercase tracking-in-contract"
        >
          Expériences professionnelles
        </h2>
        <div className="timeline">
          {jobsData.allStrapiJobs.nodes &&
            jobsData.allStrapiJobs.nodes.map(
              (jobdata, index) => <Job key={index} {...jobdata} />

              // return(
              // <>
              //   <pre>{JSON.stringify(jobdata.node, null, 4)}</pre>

              // </>)
            )}
        </div>
      </div>

      {/* <!-- Formations --> */}
    </section>
  )
}

export default Jobs
