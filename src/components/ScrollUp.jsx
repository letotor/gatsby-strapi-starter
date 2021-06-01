import React, {useState} from 'react';
import styled from 'styled-components'
import { FaChevronUp} from "react-icons/fa"


const ScrollUp = () =>{

  /* Gestion de l'impression*/
const ScrollButton = styled.button`
  @media print {
      display: none !important;
  }
`;
 


  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <>
      {/* <h1>Scroll Up component</h1> */}
      <ScrollButton
        className=" hidden-print btn btn-primary scroll-top"
        data-scroll="up"
        type="button"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      >
       <FaChevronUp/>
      </ScrollButton>
    </>
  )
}

export default ScrollUp
