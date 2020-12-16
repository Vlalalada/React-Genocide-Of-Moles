import React, { useCallback } from 'react';
import classes from './StartGameWindow.module.scss';
import {useDispatch} from 'react-redux';
import {startGame} from '../../store/actions';

function StartGameWindow(){
  const dispatch=useDispatch();

  const handleGameStart=useCallback(
      ()=>{
          dispatch(startGame());
      },
      []
  );

  return (
      <div className={classes.root}>
        <button onClick={handleGameStart}>Start</button>
      </div>
  );
};

export default StartGameWindow;