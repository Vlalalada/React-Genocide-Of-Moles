import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { startGame } from '../../store/actions';
import InfoBarView from './InfoBarView';

function InfoBar(){
    const {info}=useSelector(
        (state)=>state
    );

    const dispatch=useDispatch();

    const handleGameStart=useCallback(
        ()=>{
            dispatch(startGame());
        },
        []
    );

    return(
        <InfoBarView 
        {...info}
        onClickStart={handleGameStart}
        />
    );
}

export default InfoBar;