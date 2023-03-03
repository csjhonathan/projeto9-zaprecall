import { useState } from "react";
import Game from "./components/Game ";
import WelcomeScreen from "./components/WelcomeScreen ";
export default function App(){
  const [startGame, setStartGame] = useState(false)
  return startGame ? <Game /> : <WelcomeScreen setStartGame = {setStartGame}/>;
}