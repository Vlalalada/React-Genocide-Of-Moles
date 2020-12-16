import { CLEAR_STORE, INCREMENT_STATE, START_GAME, UPDATE_TIME } from "./actionTypes";

export const startGame = () => {
  return ({type:START_GAME});
}

export const incrementState = field => {
  return ({type:INCREMENT_STATE, payload: {field}});
}
export const clearStore = () => {
  return ({type:CLEAR_STORE});
}

export const updateTime = time => {
  return ({type:UPDATE_TIME,time});
}