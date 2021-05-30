import React from 'react'
import { contact } from '../data/siteConfig'

const Contact = ({contact}) => {
    return (
      <>
        {/* <h1>CONTACT COMPONENT</h1> */}
        <hr className="d-print-none" />

        <div
          data-aos="fade-right"
          className="contant-section px-3 px-lg-4 pb-4 d-print-none"
          id="contact"
        >
          <h2 className="h3 text mb-3 text-uppercase">Contact</h2>
          <div className="row">
            {/* Formulaire */}
            <div className="col-md-7 d-print-none">
              <div className="my-2">
                <form action="https://formspree.io/f/xyylznld" method="POST">
                  <div className="row">
                    <div className="col-6">
                      <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Prénom - Nom"
                        required
                      />
                    </div>
                    <div className="col-6">
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="_replyto"
                        placeholder="E-mail"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <textarea
                      className="form-control"
                      /*style="resize: none"*/ id="message"
                      name="message"
                      rows="4"
                      placeholder="Votre message"
                      required
                    ></textarea>
                  </div>
                  <button className="btn btn-primary mt-2" type="submit">
                    Soumettre
                  </button>
                </form>
              </div>
            </div>

            {/* Colonne de droite */}
            <div data-aos="fade-left" data-aos-duration="3000" className="col ">
              <div className="mt-2">
                <h3 className="h6">Adresse</h3>
                <div className="pb-2 text-secondary">{contact.adresse}</div>
                <h3 className="h6">Téléphone</h3>
                <div className="pb-2 text-secondary">{contact.tel}</div>
                <h3 className="h6">Email</h3>
                <div className="pb-2 text-secondary">{contact.email}</div>
              </div>
            </div>

            {/* <div className="col d-none d-print-block">
                        <div className="mt-2">
                            <div>
                                <div className="mb-2">
                                    <div className="text-dark">
                                        <i className="fab fa-facebook mr-1"></i><span>https://www.facebook.com/VGWebcreation</span>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="text-dark">
                                        <i className="fab fa-instagram mr-1"></i><span>https://www.instagram.com/artisan_de_la_permaculture2.0/</span>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="text-dark">
                                        <i className="fab fa-github mr-1"></i><span>https://github.com/letotor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
      </>
    );
}

export default Contact
