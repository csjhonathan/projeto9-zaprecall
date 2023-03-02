import playButton from "../assets/img/seta_play.png";
import styled from "styled-components";
import flipButton from "../assets/img/seta_virar.png";

export default function Buttons ({opened, cardNumber, handleFlipCard}){

  return (
    <StyledInteraction onClick={() => handleFlipCard(cardNumber)}> <img src={playButton} alt="" /></StyledInteraction>
  )
};

const StyledInteraction = styled.button`

  background-color: transparent;
  border: none;
  width: 20px;
  height: 23px;
  
  img {
    width: 20px;
    height: 23px;
  }
`