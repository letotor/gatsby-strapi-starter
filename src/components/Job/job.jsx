import React,{useState,useEffect} from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa"


const Job = ({
  company,
  position,
  date,
  isVisible,
  isPrintable,
  isPageBreakBefore,
  description,
  tasks,
  method,
  stacks,
}) => {

// const [state, useState] = useState(isVisible)

//console.log("tototototototo",tasks)

    return (
      <>
        {/* <h1>EXPERIENCE PRO COMPONENT</h1> */}
        {isVisible && (
          <div
            data-aos="zoom-in-up"
            className="timeline-card timeline-card-primary card shadow-sm"
          >
            <div className="card-body border">
              <div className="h5 mb-1">
                {position}
                {company && <span className="text-muted h6"> {company}</span>}
              </div>
              {date && <div className="text-muted text-small mb-2">{date}</div>}
              <div> {description} </div>
              <div>
                {tasks.map((task, index) => (
                  <div key={index}>
                    <FaRegArrowAltCircleRight /> {task.name}
                  </div>
                ))}
              </div>

              <div>
                {method && (
                  <span
                    style={{ backgroundColor: `${method.color}` }}
                    className="badge rounded-pill bg-success"
                  >
                    Méthodologie {method.name}
                  </span>
                )}
              </div>
              <div>
                <br />
                {stacks.map((stack, index) => (
                  <span key={index}>
                    <span
                      style={{ backgroundColor: `${stack.color}` }}
                      className="badge rounded-pill bg-primary"
                    >
                      {stack.name}
                    </span>
                    <span> </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    )
}

export default Job
