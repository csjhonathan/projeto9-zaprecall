import styled from "styled-components";
import happy from "../assets/img/party.png";
import sad from "../assets/img/sad.png"
export default function FinishMessage ({completed}) {
  const handleMessage = (haveError) =>{
    if(haveError!==0){
      return (
        <>
          <Congrats>
          <IconMessage src = {sad}/>
            Putz
          </Congrats>
          <Message>Ainda faltam alguns... Mas não desanime!</Message>
        </>
      );
    }
      return (
        <>
          <Congrats>
            <IconMessage src = {happy}/>
            Parabéns!
          </Congrats>
          <Message>Você não esqueceu de nenhum flashcard!</Message>
        </>
      );
    
  }
  return (

    <FinalMessage data-test="finish-text">
      {handleMessage(completed.filter((answer)=> answer.answer==="error").length)}
    </FinalMessage>
  )
} 

const FinalMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  width: 210px;
`
const Congrats = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  margin-bottom: 14px;
`
const Message = styled.p`
  
`

const IconMessage = styled.img`
  width: 23px;
  height: 23px;
  margin-right:13px ;
`