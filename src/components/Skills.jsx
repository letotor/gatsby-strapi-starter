import React,{useState,useEffect} from 'react'
// import siteConfig from '../data/siteConfig'


 
const Skills = ({flag,name,level}) => {


      const divStyle = {
        width: `${level}%`
      };

      const couleur = (flag)=>{
        let maClasse = "progress-bar";
        if (flag===1)
                 { maClasse= "progress-bar bg-primary";}
        if (flag===2)
                 { maClasse= `progress-bar bg-success`;}
        if (flag===3)
                { maClasse=`progress-bar bg-warning`;}
        // console.log(flag, maClasse);
        return maClasse;
      }

    //   console.log('couelur',couleur(flag))

    return (
      <>
        {/* <!-- Compétences --> */}

            <span className="text-smal">{name}</span>
            <div className="progress my-1">
              <div
                className={couleur(flag)}
                role="progressbar"
                data-aos="zoom-in-right"
                data-aos-delay="100"
                data-aos-anchor=".skills-section"
                style={divStyle}
                aria-valuenow={level}
                aria-valuemin="0"
                aria-valuemax="100"
              /> 
            </div>   
      </>
    );
}

export default Skills
