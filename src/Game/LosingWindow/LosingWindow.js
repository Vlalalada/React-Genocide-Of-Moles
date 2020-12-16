import React, {useCallback} from 'react';
import classes from './LosingWindow.module.scss';
import {useDispatch} from 'react-redux';
import {startGame,clearStore} from '../../store/actions';

function LosingWindow(){

  const dispatch=useDispatch();

  const handleGameStart=useCallback(
      ()=>{
          dispatch(clearStore());
          dispatch(startGame());
      },
      []
  );

  return (
      <div className={classes.root}>
        Game over!
        <button onClick={handleGameStart}>Start</button>
      </div>
  );
}

export default LosingWindow;