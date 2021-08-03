import styled from "styled-components"



const Cover = styled.div`
  background-color: ${(props) => (props.color ? props.color : "white")};
  background-image: url("${(props) => (props.url ? props.url : null)}");

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px 10px 0 0;
  padding: 3rem 3rem 1rem 3rem;
  margin-bottom: 0;
`

const Avatar = styled.div`
  background-color: #ffffff;
  margin:auto;
  border-radius: 5px 5px 0 0;
  max-width: 250px;
  max-height: 250px;
  text-align: center;
  overflow: hidden;
  align-items: center;

  @media (min-width: 48em) {
    margin-bottom: -80px;
    margin-left: 0;
  }
  @media print {
    margin-top: -10px;
  }

  /* & >img {
     filter: grayscale(100%);
    width: 245px;
    transform: translateY(-50px); 
  }*/
`

const TitleStyle = {
  color: "white",
  background: "rgba(0,0,0,0.3)",
  textShadow: "black 0.1em 0.1em 0.2em",
  borderRadius: "10px",
  width: "auto",
}
const BoutonStyle = {
  borderRadius: "10rem",
}


const BoutonContactStyle = {
  borderRadius: "10rem",
  color: "white!important",
  background: "rgba(0,0,0,0.3)!important",
  '&:hover': {
       opacity:"0.2",
       transform: "scale(1.2)",
       color:"red",
    }
  
}

// const BoutonContactStyle = styled.button`
// border-radius: 10rem;
//   color: white!important;
//   background: rgba(0,0,0,0.3)!important;
//   && :hover{
//     opacity:0.8;
//   }
// `


export { Cover, Avatar, TitleStyle, BoutonStyle, BoutonContactStyle }