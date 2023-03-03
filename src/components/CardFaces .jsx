import { useState } from "react";
import styled from "styled-components"
import flipButton from "../assets/img/seta_virar.png";
import hit from "../assets/img/icone_certo.png";
import doubt from "../assets/img/icone_quase.png";
import error from "../assets/img/icone_erro.png";

export default function CardFaces ({question, answer, id, completed, setCompleted, setOpened}) {
  const [isFlip, setIsFlip] = useState(false)
  
  const icon = (answer) =>{
    if(answer==="error"){
      return error;
    }else if(answer==="hit"){
      return hit;
    } else if(answer==="doubt"){
      return doubt;
    }
  }

  const test = (answer) =>{
    if(answer==="error"){
      return "no-icon";
    }else if(answer==="hit"){
      return "zap-icon";
    } else if(answer==="doubt"){
      return "partial-icon";
    }
  }
  const handleAnswer = (userAnswerColor, cardId, userAnswer) => {
    if(!completed.includes(cardId)){
      const answer = {id : cardId, color : userAnswerColor, answer : userAnswer, asnwerIcon : icon(userAnswer), test : test(userAnswer) }
      console.log(answer.test)
      const completedZaps = [...completed, answer]
      console.log(completedZaps)
      setCompleted(completedZaps)
      setOpened([])
    };
    
  }

  
  return (

    <Faces>
      <CardContent isFlip = {isFlip}>
        <Question data-test="flashcard-text">
          {question}
          <FlipButton 
            onClick={ () => setIsFlip(true)}
            data-test="turn-btn"
            >
            <img src={flipButton} alt={flipButton}/>
          </FlipButton>
        </Question>
      
        <Answer data-test="flashcard-text">
          {answer}
          <ButtonsList>
            <AnswerButton data-test="no-btn"  answerColor = {"#FF3030"} onClick= {() => handleAnswer("#FF3030", id, "error")}>{"Não lembrei"}</AnswerButton>
            <AnswerButton data-test="partial-btn" answerColor = {"#FF922E"} onClick= {() => handleAnswer("#FF922E", id, "doubt")}>{"Quase não lembrei"}</AnswerButton>
            <AnswerButton data-test="zap-btn" answerColor = {"#2FBE34"} onClick= {() => handleAnswer("#2FBE34", id, "hit")}>{"Zap!"}</AnswerButton>
          </ButtonsList>
        </Answer>
      </CardContent>
      
    </Faces>
  )
}

const Faces = styled.div`
  width: 300px;
  height: 131px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

`
const CardContent = styled.div`
  width: 100%;
  height: 100%;
  transition:transform .8s;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: ${({isFlip}) => isFlip && "rotateY(180deg)"};
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`
const Question = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`
const Answer = styled.div`
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  padding: 10px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const FlipButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;

  img{
    width: 30px;
    height: 20px;
  }
  
`

const ButtonsList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const AnswerButton = styled.button `
  width: 85px;
  height: 37px;
  border-radius: 5px;
  background-color: ${({answerColor}) => answerColor};
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  border: none;
  color: white;
`
