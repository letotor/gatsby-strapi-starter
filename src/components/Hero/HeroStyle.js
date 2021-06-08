import styled from "styled-components/macro"


const Cover = styled.div`
  /* background-color: #4a89dc; */
  background-image: url(${(props) => props.img});
  color: white;
  border-radius: 10px 10px 0 0;
  padding: 3rem 3rem 1rem 3rem;
  margin-bottom: 0; ;;
`

const Avatar = styled.div`
  background-color: #ffffff;
  border-radius: 5px 5px 0 0;
  max-width: 239px;
  max-height: 233px;
  margin-top: 20px;
  text-align: center;
  padding: 0.5rem;

  margin-left: auto;
  margin-right: auto;
  @media (min-width: 48em) {
    margin-bottom: -80px;
    margin-left: 0;
  }
  @media print {
    margin-top: -10px;
  }

  & img {
    filter: grayscale(100%);
  }
`

const TitleStyle = {
  color: "white",
  background: "rgba(0,0,0,0.3)",
  textShadow: "black 0.1em 0.1em 0.2em",
  borderRadius: "10px",
  width: "100px",
}
const BoutonStyle = {
  borderRadius: "10rem",
}
const BoutonContactStyle = {
  borderRadius: "10rem",
  color: "white!important",
  background: "rgba(0,0,0,0.3)!important",
}



export { Cover, Avatar, TitleStyle, BoutonStyle, BoutonContactStyle }