import styled from "styled-components";
import PlayButton from "./PlayButton ";
import { useState } from "react";
import CardFaces from "./CardFaces ";

export default function FlashCards ({questions}){
  const [opened, setOpened] = useState(0);
  
  const handleFlipCard = (cardNumber) => {
    setOpened(cardNumber)
  }
  return (

    questions.map(({question, answer}, index) => {
      return( 
        <Card key = {index} opened = {opened} cardNumber = {index+1}> 
          <FirstFace>
            <StyledText opened = {opened} cardNumber = {index+1}>{`Pergunta ${index+1}`}</StyledText>
            <PlayButton opened = {opened} cardNumber = {index+1} handleFlipCard={handleFlipCard}/>
          </FirstFace>
          <CardFaces question = {question} answer={answer}/>
        </Card> )
    })
  )
}

const Card = styled.div`
  width: 300px;
  height: ${({opened, cardNumber}) => opened === cardNumber ? "131" : "65"}px;
  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  transition: height 0.3s, transform .8s;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: ${({opened, cardNumber}) => opened === cardNumber && "rotateY(180deg)"};
  margin-bottom: 25px;
`

const FirstFace = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  position: absolute;
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
`
const StyledText = styled.p`
  
  font-weight: ${({opened, cardNumber}) => opened === cardNumber ? "400" : "700"};
`