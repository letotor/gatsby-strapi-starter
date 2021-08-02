import React from 'react'
// import aos from'aos';

import { FaRegArrowAltCircleRight } from "react-icons/fa"
const Exp = ({jobs}) => {
  const keywords = jobs.keywords
  const tasks = jobs.task
    return (
      <>
        {/* <h1>EXPERIENCE PRO COMPONENT</h1> */}
        <div
          data-aos="zoom-in-up"
          className="timeline-card timeline-card-primary card shadow-sm"
        >
          <div className="card-body border">
            <div className="h5 mb-1">
              {jobs.title}
              {jobs.company && (
                <span className="text-muted h6"> {jobs.company}</span>
              )}
              {jobs.where && (
                <span className="text-muted h6"> - {jobs.where}</span>
              )}
            </div>
            {jobs.begin && (
              <div className="text-muted text-small mb-2">
                {jobs.begin.month} {jobs.begin.year} -{" "}
                {jobs.duration
                  ? jobs.duration
                  : `${jobs.end.month} ${jobs.end.year}`}
              </div>
            )}
            <div> {jobs.description} </div>
            <div>
              {tasks.map((task, index) => (
                <div key={index}>
                  <FaRegArrowAltCircleRight />
                  {task}
                </div>
              ))}
            </div>

            <div>
              {jobs.method && (
                <span className="badge badge-pill badge-success">
                  Méthodologie {jobs.method}
                </span>
              )}
            </div>
            <div>
              <br />
              {keywords.map((keyword, index) => (
                <span key={index}>
                  <span className="badge badge-pill badge-primary">
                    {keyword}
                  </span>
                  <span> </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </>
    )
}

export default Exp
