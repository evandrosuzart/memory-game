import React from "react";
import { Board, Card } from "../../components";
/*
const GamePage = () => (
  <Board>
    <Card name="test card" isActive />
  </Board>
);
*/

class GamePage extends React.Component {
  state = { isActive: true };

  handleClick = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  };
  render() {
    return (
      <Board>
        <Card
          name="test card"
          isActive={this.state.isActive}
          onClick={this.handleClick}
        />
      </Board>
    );
  }
}
export default GamePage;
