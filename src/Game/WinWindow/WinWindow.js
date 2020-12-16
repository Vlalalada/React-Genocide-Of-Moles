import React, {useCallback} from 'react';
import classes from './WinWindow.module.scss';
import {useSelector,useDispatch} from 'react-redux';
import {startGame,clearStore} from '../../store/actions';

function WinWindow(){
  const {fails, score, difficulty,time } = useSelector(
    ({ info: { fails, score, difficulty,time } }) => ({fails, score, difficulty,time }));

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
      <h3>You won!</h3>
      <p>Game difficult: <span className="game-difficult">{difficulty}</span></p>
      <p>Score: <span className="score">{score}</span> / 100 point(s)</p>
      <p>You failed: <span className="fails">{fails}</span> / 3 time(s)</p>
      <p>Time: <span className="time">{time}</span> ms</p>
      <button onClick={handleGameStart}>Start</button>
    </div>
  );
};

export default WinWindow;