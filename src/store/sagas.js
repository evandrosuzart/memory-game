import { delay } from "redux-saga";
import { select, takeEvery, put, call } from "redux-saga/effects";

import {
  LOCK,
  OPEN_CARD,
  SET_MATCH,
  CLOSE_CARDS,
  SELECT_CARD
} from "./actions";

function* selectCard(action) {
  const { key } = action;
  const cards = yield select(state => state.cards);
  const index = cards.findIndex(c => c.key === key);
  const otherCardIndex = cards.findIndex(c => c.isActive && !c.hasMatch);
  const isLocked = yield select(state => state.isLocked);
  if (!isLocked && index > -1 && !cards[index].isActive) {
    yield put({ type: OPEN_CARD, index });
    if (otherCardIndex > -1) {
      if (cards[index].id === cards[otherCardIndex].id) {
        yield put({ type: SET_MATCH, index1: index, index2: otherCardIndex });
      } else {
        yield put({ type: LOCK });
        yield call(delay, 1500);
        yield put({
          type: CLOSE_CARDS,
          index1: index,
          index2: otherCardIndex
        });
      }
    }
  }
}

function* gameSaga() {
  yield takeEvery(SELECT_CARD, selectCard);
}

export { selectCard, gameSaga };
