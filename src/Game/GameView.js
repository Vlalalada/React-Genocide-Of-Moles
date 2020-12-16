import React from 'react';
import classes from './Game.module.scss';
import InfoBar from './InfoBar/InfoBar';
import PlayZone from './PlayZone/PlayZone';
import {useSelector} from 'react-redux';
import LosingWindow from './LosingWindow/LosingWindow';
import WinWindow from './WinWindow/WinWindow';
import StartGameWindow from './StartGameWindow/StartGameWindow';

function GameView(){
    const {fails, score, isStart} = useSelector(
        ({ info: { fails, score, isStart} }) => ({fails, score, isStart})
    );
    
    return(
        <div className={classes.root}>
            <h3 className={classes.title}>Genocide of moles</h3>
            <div className={classes.container}>
                {fails===3&&<LosingWindow/>}
                {
                isStart&&fails!==3&&score!==100&&
                    <>
                        <PlayZone/>
                        <InfoBar/>
                    </>
                }
                {
                    !isStart&&fails===0&&score===0&&<StartGameWindow/>
                }
                {score===100&&<WinWindow/>}
            </div>
        </div>
    );
}

export default GameView;