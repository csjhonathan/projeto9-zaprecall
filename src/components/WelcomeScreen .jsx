import styled from "styled-components"
import zapLogo from "../assets/img/bigZap.png"
export default function WelcomeScreen ({setStartGame}) {
  return (
    <StyledWelcome>
      <Content>
        <LogoTitle>
          <StartLogo src = {zapLogo} alt = {"zapLogo"}/>
          <GameTitle>ZapRecall</GameTitle>
        </LogoTitle>
        <StartButton onClick={ () => setStartGame(true)} data-test = "start-btn"> Iniciar Recall!</StartButton>
      </Content>
    </StyledWelcome>
  )
} 

const StyledWelcome = styled.div`
  width : 100vw;
  height: 100vh;
  background: #FB6B6B;
  border: 1px solid #DBDBDB;
  display: flex;
  align-items: center;
  justify-content: center;

`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px ;
`
const StartLogo = styled.img`
  width: 136px;
  height: 161px;
`
const GameTitle = styled.h1`
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.012em;
  color: #FFFFFF;
`
const StartButton = styled.button`
  width: 246px;
  height: 54px;
  background: #FFFFFF;
  border: 1px solid #D70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #D70900;
`

const LogoTitle = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
