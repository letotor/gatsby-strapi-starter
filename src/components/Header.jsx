import React from "react"

import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"

const Header = ({ authorName }) => {
  return (
    <>
      {/* <h1>COMPOSANT HEADER</h1> */}
      <header className="">
        <div id="header_url_print" className=" row d-print-block d-none"></div>
        <div className="container text-center text-lg-left">
          <div className="py-3 clearfix d-print-none">
            <p data-aos="flip-right" className="h4 site-title mb-0">
              {authorName}
            </p>

            <div className="site-nav">
              <nav role="navigation">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://www.facebook.com/VGWebcreation"
                      title="Facebook"
                    >
                      <FaFacebook size={44} color="#333333" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://www.instagram.com/artisan_de_la_permaculture2.0/"
                      title="Instagram"
                    >
                      <FaInstagram size={44} color="#333333" />
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://github.com/letotor"
                      title="Github"
                    >
                      <FaGithub size={44} color="#333333" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
