import React from 'react'
import ScrollUp from './ScrollUp'

const Footer = () => {
    return (
      <>
       
        {/* <h1>FOOTER COMPONENT</h1>  */}
        <footer className="pt-4 pb-4 text-muted text-center">
          <div className="container d-print-none">
            <div className="my-3">
              <div className="h4">Victor de GERMAIN</div>

              <button
                className="btn btn-primary scroll-top"
                data-scroll="up"
                type="button"
              >
                <i className="fa fa-chevron-up"></i>
              </button>

              <div className="footer-nav">
                <nav role="navigation">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        target="_blank"
                        href="https://www.facebook.com/VGWebcreation"
                        title="Facebook"
                      >
                        <i className="fab fa-facebook"></i>
                        <span className="menu-title sr-only">Facebook</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        target="_blank"
                        href="https://www.instagram.com/artisan_de_la_permaculture2.0/"
                        title="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                        <span className="menu-title sr-only">Instagram</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        target="_blank"
                        href="https://github.com/letotor"
                        title="Github"
                      >
                        <i className="fab fa-github"></i>
                        <span className="menu-title sr-only">Github</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="mb-1">
              &copy;
              <a href="https://vgwebcreation.fr/" target="_blank">
                VGWebcreation
              </a>
              2021. Tous droits réservés
            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer