import styled from "styled-components";
import gameLogo from "../assets/img/logo.png"
import FlashCards from "./FlashCards ";
import themes from "../utils/themes";
import { useState } from "react";
export default function Game () {
  const [completed, setCompleted] = useState([]);
  return (
    <StyledGame>
      <Logo src = {gameLogo}/>
      <FlashCards questions = {themes[0].questions} completed = {completed} setCompleted = {setCompleted}/>
      <StyledFooter data-test="footer">{`${completed.length}/${themes[0].questions.length} CONCLUÍDOS`}</StyledFooter>
    </StyledGame>

  );
}

const StyledGame = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #FB6B6B;
  border: 1px solid #DBDBDB;
  overflow: scroll;
  overflow-y: hidden;
  padding-bottom: 70px;
`

const Logo = styled.img`
  min-width: 255.61px;
  min-height: 60px;
  margin-top: 48px;
  margin-bottom: 59px;
`

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  background: #FFFFFF;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`