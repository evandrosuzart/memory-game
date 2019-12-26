import {
  LOCK,
  OPEN_CARD,
  SET_MATCH,
  CLOSE_CARDS,
  CLOSE_VICTORY,
  START_GAME
} from "./actions";
import ListBuilders from "../builders/ListBuilders";
const initialState = {
  isLocked: false,
  isVictoryDialogOpen: false,
  cards: new ListBuilders()
    .createList(4)
    .shuffle()
    .build()
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCK: {
      return { ...state, isLocked: true };
    }
    case START_GAME: {
      return {
        ...state,
        isVictoryDialogOpen: false,
        cards: new ListBuilders()
          .createList(4)
          .shuffle()
          .build()
      };
    }
    case CLOSE_VICTORY:
      return { ...state, isVictoryDialogOpen: false };
    case OPEN_CARD: {
      const cards = state.cards.slice();
      cards[action.index].isActive = true;
      return { ...state, cards };
    }
    case SET_MATCH: {
      const cards = state.cards.slice();
      let isVictoryDialogOpen = false;
      cards[action.index1].hasMatch = true;
      cards[action.index2].hasMatch = true;

      if (cards.every(c => c.hasMatch)) {
        isVictoryDialogOpen = true;
      }
      return { ...state, cards, isVictoryDialogOpen };
    }
    case CLOSE_CARDS: {
      const cards = state.cards.slice();
      cards[action.index1].isActive = false;
      cards[action.index2].isActive = false;

      return {
        ...state,
        isLocked: false,
        cards
      };
    }

    default:
      return state;
  }
};

export { gameReducer, initialState };
