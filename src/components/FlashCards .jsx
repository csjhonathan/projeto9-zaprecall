import styled from "styled-components";
import PlayButton from "./PlayButton ";
import { useState } from "react";
import CardFaces from "./CardFaces ";
import playButton from "../assets/img/seta_play.png";
export default function FlashCards ({questions , completed, setCompleted}){
  const [opened, setOpened] = useState([]);
  const [img, setImg] = useState(playButton)
  const {test, setTest} = useState ()
  const handleFlipCard = (cardNumber) => {
    if(opened.length > 0){
      return
    }else{
      setOpened([...opened, cardNumber])
    }
  }

  const colorPicker  = (completed , cardNumber) => {
    
    if(completed.map(answer => answer.id).includes(cardNumber)){
      return(completed.filter((answer) => answer.id===cardNumber)[0].color);
    }
  }

 
  return (
 
    questions.map(({question, answer , id}, index) => {
      return( 
        <Card key = {index} opened = {opened} cardNumber = {id} data-test="flashcard"> 
          <FirstFace>
            <StyledText opened = {opened} completed = {completed} colorPicker = {!(completed.length === 0) && colorPicker(completed, id)} cardNumber = {id} data-test="flashcard-text" >{`Pergunta ${id}`}</StyledText>
            <PlayButton img = {img} opened = {opened} completed = {completed} cardNumber = {id} handleFlipCard={handleFlipCard} test = {test}/>
          </FirstFace>
          <CardFaces 
          question = {question} 
          answer={answer} 
          id = {id}
          completed = {completed}
          setCompleted = {setCompleted}
          setOpened = {setOpened}
          />
        </Card> )
    })
  )
}

const Card = styled.div`
  width: 300px;
  height: ${({opened, cardNumber}) => opened.includes(cardNumber) ? "131" : "65"}px;
  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  transition: height 0.3s, transform .8s;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: ${({opened, cardNumber}) => opened.includes(cardNumber) && "rotateY(180deg)"};
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
  text-decoration: ${({completed, cardNumber}) => completed.map(answer => answer.id).includes(cardNumber) && "line-through"};
  color : ${({colorPicker}) => colorPicker};
`