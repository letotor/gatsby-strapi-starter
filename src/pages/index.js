import React,{useEffect} from "react"

import Layout from "../components/layoutcv"
import SEO from "../components/seo"
import AOS from 'aos'

/**
 * import bootstrap par defaut pour le CV
 */
// import "../assets/css/css/bootstrap.min.css"
/**
 * surcharge du fichier bootstrap pour le style */ 

// import "../assets/css/css/style.css"
// import "../assets/css/css/site.css"
// import "../assets/css/css/dark-theme.css"
// import "../assets/css/css/print.css"
// import "../assets/css/css/aos.css"
// import "../assets/css/css/main.css"


/**
 * Import bootstrap fontawson pour MDBoostrap
 */
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"


// import "../assets/css/css/bootstrap5/bootswatchLight.min.css"
import "../assets/css/css/main.css"
import "../assets/css/css/site.css"
import "../assets/css/css/print.css"
import "../assets/css/css/aos.css"
// import "bootstrap-css-only/css/bootstrap.min.css"


/**
 * Point d'entrée de l'application REACTJs
 */
const  Index = () => {

  /**
   * Gestion des effet sur composant avec AOS 
   */
  useEffect(() => {
    console.log("use effect aos")
    AOS.init({
      anchorPlacement: "top-left",
      duration: 1300,
    })
    // AOS.init({ disable: true });
  }, [])


  return (
    <>
      {/** Gestion du SEO ici
       */}
      <SEO
        description="Cv V de GERMAIN strapi gatsby"
        lang="fr"
        title="CV Victor de GERMAIMN gatsby strapi"
      />

      <Layout/>
    </>
  )
}

export default Index