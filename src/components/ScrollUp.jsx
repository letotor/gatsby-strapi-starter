import React, {useState} from 'react';
import styled from 'styled-components'
import { BsChevronUp } from "react-icons/bs"


  /* Gestion de l'impression*/
const ScrollButton = styled.button`
  width:10px;
  height:10px;
  border-radius:100%;

  @media print {
    display: none !important;
  }
`
const WrapperChevron = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: transparent;
  border: 1px solid, blue;
  font-weight: bold;
`

const ScrollUp = () =>{

  const [showScroll, setShowScroll] = useState(false)
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    if (typeof window !== "undefined") {
      // it's safe to use window now
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };
if (typeof window !== "undefined") {
  // it's safe to use window now
  window.addEventListener('scroll', checkScrollTop)
}

  return (
    <>
      {/* <h1>Scroll Up component</h1> */}
      <ScrollButton
        className=" hidden-print btn btn-primary scroll-top"
        data-scroll="up"
        type="button"
        onClick={scrollTop}
        style={{ textAlign: "justify", display: showScroll ? "flex" : "none" }}
      >
        <WrapperChevron> <BsChevronUp/></WrapperChevron>
      </ScrollButton>
    </>
  )
}

export default ScrollUp
