import React from "react"
import styled from "styled-components"
// import { Row, Col, Container } from "reactstrap"
import {
  FaHome,
  FaListUl,
  FaUserTie,
  FaUniversity,
  FaDrum,
  FaIdCard,
} from "react-icons/fa"

const ContainerRoot = styled.div`
  /* margin-top: -40px; */
  background-color: transparent;
  padding-top: 0.5rem;
`

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.986);
  padding: 0 1rem;

  & :hover {
    color: rgba(3, 3, 3, 0.6);
    transform: scale(1.3);
    transition-duration: 1s;
  }
`


const Menu = () => {
  
  return (
    <>
      {/* <h1>COMPONENT MENU</h1> */}
      <ContainerRoot id="header-menu" className="d-print-none header-nav">
        <nav role="navigation">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink href="#resume" title="Résumé">
                <FaHome/>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#competence" title="Compétences">
           <FaListUl/>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#experience" title="Experiences">
               <FaUserTie/>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#formation" title="Formations">
                < FaUniversity/>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#hobbies" title="Interets">
               <FaDrum/>
              </NavLink>
            </li>

            <li className="d-none nav-item">
              <NavLink href="#contact" title="Contact">
               <FaIdCard/>
              </NavLink>
            </li>
          </ul>
        </nav>
      </ContainerRoot>
    </>
  )
}

export default Menu
