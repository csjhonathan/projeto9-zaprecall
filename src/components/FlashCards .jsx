import questions from "../utils/questions ";
import styled from "styled-components";
import playButton from "../assets/img/seta_play.png";
export default function FlashCards (){
  return (
    questions.map(({question, answer}, index) => {
      return (
        <StyledFlashCard>
          {`Pergunta ${index+1}`}
        <StyledPlaybutton image = {playButton}>
          <img src={playButton} alt="playButton" srcset="" />
        </StyledPlaybutton>
        </StyledFlashCard>
      )
    })
  )
} 

const StyledFlashCard = styled.div`
  width: 300px;
  min-height: 65px;
  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  padding: 15px;
`

const StyledPlaybutton = styled.button`
  background-color: transparent;
  border: none;


  img{
    width: 20px;
  height: 23px;
  }
`