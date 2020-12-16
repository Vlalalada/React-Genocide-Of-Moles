import {combineReducers} from 'redux';
import gameReducer from './reducer';

export default combineReducers(
    {info:gameReducer}
);