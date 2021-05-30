import React from 'react'

const Hobbies = ({hobbies}) => {
  
    const keywords= hobbies.keywords

    return (
      <div>
        {/* <h1>HOBBIES COMPONENT</h1> */}

        <div
          data-aos="flip-up"
          className="timeline-card timeline-card-warning card shadow-sm"
        >
          <div className="card-body">
            <div className="h5 mb-1">
              {hobbies.title}
              {hobbies.where && (
                <span className="text-muted h6"> {hobbies.where}</span>
              )}
            </div>
            {hobbies.year && (
              <div className="text-muted text-small mb-2">{hobbies.year}</div>
            )}
            <div> {hobbies.description} </div>

            <div>
              {keywords.map((keyword, index) => (
                <span key={index}>
                  <span className="badge badge-pill badge-secondary">
                    {keyword}
                  </span>
                  <span> </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hobbies
