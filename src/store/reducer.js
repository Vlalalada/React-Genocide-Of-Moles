import { CLEAR_STORE, INCREMENT_STATE, START_GAME, UPDATE_TIME } from "./actionTypes";

const initialState = {
  score: 0,
  time: 4000,
  difficulty: 1,
  fails: 0,
  isStart: false
};

const gameReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, isStart: true };
    case INCREMENT_STATE:
      return { ...state, [action.payload.field]: state[action.payload.field] + 1 };
    case UPDATE_TIME:
      return {...state, time:action.time};
    case CLEAR_STORE:
      return initialState;
    default:
      return state;
  }
}

export default gameReducer;
