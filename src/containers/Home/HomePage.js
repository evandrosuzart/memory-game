import React from "react";
import { DashBoard, DashBoardMenu, DashBoardButton } from "../../components";
const HomePage = () => (
  <DashBoard>
    <DashBoardMenu title="Jogo de memória">
      <DashBoardButton to="/game">Start Game</DashBoardButton>
    </DashBoardMenu>
  </DashBoard>
);
export default HomePage;
