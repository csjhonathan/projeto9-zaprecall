import { useState } from "react";
import styled from "styled-components"
import flipButton from "../assets/img/seta_virar.png";
import hit from "../assets/img/icone_certo.png";
import error from "../assets/img/icone_erro.png";
import doubt from "../assets/img/icone_quase.png";
export default function CardFaces ({question, answer}) {
  const [isFlip, setIsFlip] = useState(false)

  return (

    <Faces>
      <CardContent isFlip = {isFlip}>
        <Question>
          {question}
          <FlipButton 
            onClick={ () => setIsFlip(true)}>
            <img src={flipButton} alt={flipButton}/>
          </FlipButton>
        </Question>
      
        <Answer >
          {answer}
          <ButtonsList>
            <AnswerButton answerColor = {"#FF3030"} >{"Não lembrei"}</AnswerButton>
            <AnswerButton answerColor = {"#FF922E"}>{"Quase não lembrei"}</AnswerButton>
            <AnswerButton answerColor = {"#2FBE34"}>{"Zap!"}</AnswerButton>
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
