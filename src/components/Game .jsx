import styled from "styled-components";
import gameLogo from "../assets/img/logo.png"
import FlashCards from "./FlashCards ";

export default function Game () {

  return (
    <StyledGame>
      <Logo src = {gameLogo}/>
      <FlashCards />
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
`

const Logo = styled.img`
  min-width: 255.61px;
  min-height: 60px;
  margin-top: 48px;
  margin-bottom: 59px;
`