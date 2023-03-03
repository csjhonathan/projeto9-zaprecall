import styled from "styled-components";


export default function Buttons ({opened, cardNumber, handleFlipCard, completed, img, test}){

  return (
    <StyledInteraction disabled = {completed.map(answer => answer.id).includes(cardNumber) && true} onClick={() => handleFlipCard(cardNumber)} data-test="play-btn"> <img src={img} alt="" data-test = {test}/></StyledInteraction>
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