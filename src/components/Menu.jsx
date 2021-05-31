import React from 'react'

const Menu = () => {
    return (
        <>
        {/* <h1>COMPONENT MENU</h1> */}
            <div id="header-menu" className="d-print-none header-nav">
                <nav role="navigation">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link " href="#resume" title="Résumé">
                                <i className="fas fa-envelope-open-text"></i>
                                <span className="menu-title sr-only">Résume</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#competence" title="Compétences"><i className="fas fa-list-ul"></i><span
                                className="menu-title sr-only">Compétences</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience" title="Experiences"><i className="fas fa-user-tie"></i><span
                                className="menu-title sr-only">Experiences</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#formation" title="Formations"><i className="fas fa-university"></i><span
                                className="menu-title sr-only">Formations</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#hobbies" title="Interets"><i className="fas fa-drum"></i><span
                                className="menu-title sr-only">Interets</span></a>
                        </li>

                        <li className="d-none nav-item">
                            <a className="nav-link" href="#contact" title="Contact"><i className="fas fa-id-card"></i><span
                                className="menu-title sr-only">Contact</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Menu


