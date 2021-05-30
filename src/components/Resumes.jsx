import React , {useState} from 'react'
// import { authorDescriptionMore } from '../data/siteConfig';
import styled from 'styled-components'




const Resumes = ({resumeCourt, resumeLong,resumeCompany,color, contact}) => {
    
 
    const Entreprise = styled.span`
      color: ${(props) => props.color || "#4f8cdd"};
      font-weight: 700;
    `;

    const Button = styled.button`
      background: ${(props) => props.color || "#4f8cdd"};
      color: white;
    `;


    const [readMore, setReadMore] = useState(true);

    const firstLetter = resumeCourt.substr(0, 1);
    const resumeCourtTronque = resumeCourt.substr(1);
    return (
      <>
        {/* <h1>RESUME COMPONENT</h1>   */}
        <div id="#resume" className="about-section pt-4 px-3 px-lg-4 mt-1">
          <div className="row">
            <div className="col-md-6 ">
              {/* <!-- <h2 id="resume" className=" h3 mb-3 text-uppercase tracking-in-contract">Résumé</h2> --> */}
              <p>
                <span className="lettrine">{firstLetter}</span>
                <span>{resumeCourtTronque}</span>
                {readMore && (
                  <span className="d-none-print" id="dots">
                    {" "}
                    [...]
                  </span>
                )}
                {!readMore && (
                  <span className="d-none-print" id="dots">
                    .
                  </span>
                )}
              </p>
            </div>

            <div className=" col-md-5 order-first order-md-last offset-md-1">
              <div id="etatcivil" className=" row mt-2">
                {/* <div className="col-sm-4">
                                <div className="pb-1">Age</div>
                            </div>

                            <div className="col-sm-8">
                                <div className="pb-1 text-secondary">xx</div>
                            </div>  */}

                <div className="col-sm-4">
                  <div className="pb-1">Email</div>
                </div>

                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">{contact.email}</div>
                </div>

                <div className="col-sm-4">
                  <div className="pb-1">Téléphone</div>
                </div>

                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">{contact.tel}</div>
                </div>

                <div className="col-sm-4">
                  <div className="pb-1">Adresse</div>
                </div>

                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">{contact.adresse}</div>
                </div>
              </div>
            </div>
          </div>

          {readMore && (
            <div data-aos="zoom-in-left">
              <Entreprise id="less" color={color}>
                {resumeCompany}
              </Entreprise>
            </div>
          )}
          {!readMore && (
            <div id="more">
              {resumeLong}
              <div data-aos="zoom-in-left">
                <Entreprise color={color}>
                  <br></br>
                  {resumeCompany}
                </Entreprise>
              </div>
            </div>
          )}

          <div className="d-print-none">
            <a href="#more">
              <Button
                id="mybtn"
                data-aos="zoom-in-left"
                className="btn"
                color={color}
                onClick={() => setReadMore(!readMore)}
              >
                {readMore && <i className="fas fa-plus-circle"></i>}
                {!readMore && <i className="fas fa-minus-circle"></i>}
              </Button>
            </a>
          </div>
        </div>
      </>
    );
}

export default Resumes


