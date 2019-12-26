import React from "react";
import { connect } from "react-redux";
import { selectCard, closeVictoryDialog, startGame } from "../../store/actions";
import { Board, Card, VictoryDialog } from "../../components";

const GamePage = ({
  cards,
  onCardClick,
  isVictoryDialogOpen,
  onCloseVictoryDialog,
  onStartGame
}) => (
  <>
    <Board>
      {cards.map(card => (
        <Card
          key={card.key}
          name={card.name}
          isActive={card.isActive}
          onClick={() => {
            onCardClick(card.key);
          }}
        />
      ))}
    </Board>
    <VictoryDialog
      isOpen={isVictoryDialogOpen}
      onClose={onCloseVictoryDialog}
      onGameRestart={onStartGame}
    />
  </>
);

const mapDispatchToProps = {
  onCardClick: selectCard,
  onCloseVictoryDialog: closeVictoryDialog,
  onStartGame: startGame
};
const mapStateToProps = state => ({
  cards: state.cards,
  isVictoryDialogOpen: state.isVictoryDialogOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
