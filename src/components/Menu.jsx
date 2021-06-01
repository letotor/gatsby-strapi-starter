import React from 'react'
import { FaHome,FaListUl,FaUserTie,FaUniversity,FaDrum,FaIdCard} from "react-icons/fa"
const Menu = () => {
    return (
      <>
        {/* <h1>COMPONENT MENU</h1> */}
        <div id="header-menu" className="d-print-none header-nav">
          <nav role="navigation">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link " href="#resume" title="Résumé">
                  <FaHome />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#competence" title="Compétences">
                  <FaListUl />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience" title="Experiences">
                  <FaUserTie />
                </a>
              </li>
              <li className="nav-item">
                {/* <button onClick={() => scrollTo("#formation")}>My link formation</button> */}
                <a className="nav-link" href="#formation" title="Formations">
                  <FaUniversity />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#hobbies" title="Interets">
                  <FaDrum />
                </a>
              </li>

              <li className="d-none nav-item">
                <a className="nav-link" href="#contact" title="Contact">
                  <FaIdCard />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )
}

export default Menu


