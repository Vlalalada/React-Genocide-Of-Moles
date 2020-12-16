import React from 'react';
import classes from './InfoBar.module.scss';

function InfoBarView({score,difficulty,time,fails,onClickStart}){
    return(
        <div className={classes.root}>
            <h3>STATUS BAR</h3>
            <p>Game difficult: <span className="game-difficult">{difficulty}</span></p>
            <p>Score: <span className="score">{score}</span> / 100 point(s)</p>
            <p>You failed: <span className="fails">{fails}</span> / 3 time(s)</p>
            <p>Time: <span className="time">{time}</span> ms</p>
            <button onClick={onClickStart}>Start</button>
        </div>
    );
}

export default InfoBarView;