import React from 'react'

import { FaFacebook, FaGithub, FaInstagram, FaChevronUp } from "react-icons/fa"
import styled from 'styled-components'




const MediaLink = styled.a`
  background-color: transparent;
  &:hover {
    opacity: 0.3;
  }
`


const Footer = () => {


    return (
      <>
        {/* <h1>FOOTER COMPONENT</h1>  */}
        <footer className="pt-4 pb-4 text-muted text-center">
          <div className="container d-print-none">
            <div className="my-3">
              <div className="h4">Victor de GERMAIN</div>

            
              <div className="footer-nav">
                <nav role="navigation">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <MediaLink
                        className="nav-link"
                        target="_blank"
                        href="https://www.facebook.com/VGWebcreation"
                        title="Facebook"
                      >
                        <FaFacebook size={44} color="#333333" />
                      </MediaLink>
                    </li>
                    <li className="nav-item">
                      <MediaLink
                        className="nav-link"
                        target="_blank"
                        href="https://www.instagram.com/artisan_de_la_permaculture2.0/"
                        title="Instagram"
                      >
                        <FaInstagram size={44} color="#333333" />
                      </MediaLink>
                    </li>
                    <li className="nav-item">
                      <MediaLink
                        className="nav-link"
                        target="_blank"
                        href="https://github.com/letotor"
                        title="Github"
                      >
                        <FaGithub size={44} color="#262626" />
                      </MediaLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="mb-1">
              &copy;
              <a href="https://DGwebcreation.fr/" target="_blank">
                VGWebcreation
              </a>
              2021. Tous droits réservés
            </div>
          </div>
        </footer>
      </>
    )
}

export default Footer