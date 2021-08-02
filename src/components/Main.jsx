import React, {Fragment, useEffect} from 'react'
//  import { Row, Col, Container } from "reactstrap"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Resumes from './Resumes'
import Exp from './Exp'
import Contact from './Contact'
import Formation from '../components/Formation/Formation'
import Hobbies from './Hobbies'
import Skills from './Skills'
import siteConfig from '../data/siteConfig'

import styled from "styled-components";
import Formations from "../containers/Formations"

const PageBreak = styled.div`
  @media print {
    page-break-after: always;
  }
`

const Cover = styled.div`
  border-radius: 0 0 10px 10px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  padding: 2rem;
`



const Main = () => {




    const filterFlag = (map,value)=>{ 
      return map.filter((skill) => {
        return skill.flag === value
      });
  }

  const skillOne = filterFlag(siteConfig.skills, 1);
  const skilltwo = filterFlag(siteConfig.skills, 2);
  const skillThree = filterFlag(siteConfig.skills,3);
console.log(skillOne, skilltwo, skillThree);
  

  // useEffect(test, []);

    return (
      <>
        <Cover className="pl-3 text-justify" color="white">
          <span id="resume">
            <Resumes
              contact={siteConfig.contact}
              resumeCourt={siteConfig.authorDescription}
              resumeLong={siteConfig.authorDescriptionMore}
              resumeCompany={siteConfig.company.description}
              color={siteConfig.company.color}
            />
          </span>

          <hr className="d-print-none-off" />
          <div className="skills-section px-3 px-lg-4">
            <h2
              id="competence"
              className="h3 mb-3 text-uppercase tracking-in-contract"
            >
              Compétences
            </h2>

            <MDBRow>
              {/* <div className="col-md-4"> */}
              <MDBCol md="4">
                {skillOne &&
                  skillOne.map((skill, index) => {
                    return (
                      <Skills
                        key={index}
                        flag={skill.flag}
                        name={skill.name}
                        level={skill.level}
                      />
                    )
                  })}
              </MDBCol>

              <MDBCol md="4">
                {/* <div className="col-md-4"> */}
                {skilltwo &&
                  skilltwo.map((skill, index) => {
                    return (
                      <Skills
                        key={index}
                        flag={skill.flag}
                        name={skill.name}
                        level={skill.level}
                      />
                    )
                  })}
              </MDBCol>

              <MDBCol md="4">
                {/* <div cla</Col>ssName="col-md-4"> */}
                {skillThree &&
                  skillThree.map((skill, index) => {
                    return (
                      <Skills
                        key={index}
                        flag={skill.flag}
                        name={skill.name}
                        level={skill.level}
                      />
                    )
                  })}
              </MDBCol>
            </MDBRow>
          </div>

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
              {siteConfig.jobs &&
                siteConfig.jobs.map((job, index) => (
                  <Exp key={index} jobs={job} />
                ))}
            </div>
          </div>

          {/* <!-- Formations --> */}
          <Formations />

          {/* <!-- Centre interet --> */}
          <PageBreak />
          <hr className="d-print-none-off" />
          <div className="work-experience-section px-3 px-lg-4">
            <h2
              id="hobbies"
              className="h3 mb-4 text-uppercase tracking-in-contract"
            >
              Centres d'interets
            </h2>

            <div className="timeline">
              {siteConfig.hobbies &&
                siteConfig.hobbies.map((hobbie, index) => (
                  <Hobbies key={index} hobbies={hobbie} />
                ))}
            </div>
          </div>

          <Contact contact={siteConfig.contact} />
        </Cover>
      </>
    )
}

export default Main
