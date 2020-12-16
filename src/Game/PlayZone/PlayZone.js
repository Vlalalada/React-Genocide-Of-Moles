import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { randomHole } from '../../utils';
import PlayZoneView from './PlayZoneView';
import { incrementState,updateTime } from "../../store/actions.js";
import classes from './PlayZone.module.scss';

const holesCount = 6;
const difficultyTime = [4000, 3000, 2000, 1500, 1000, 900, 800, 700, 600, 500];
let click = false;
let prevHole = null;

function PlayZone(){

  const [currentHole, setCurrentHole] = useState(null);

  const dispatch = useDispatch();

  const { isStart, fails, difficulty, score } = useSelector(
    ({ info: { isStart, fails, time, difficulty, score } }) => ({ isStart, fails, time, difficulty, score })
  );
  
  const timeoutGenerationHole = useRef(null);
  const timeoutGenerationHoleWithOutClick = useRef(null);
  const initialTimeoutGenerationHole = useRef(null);

  const generationHole = useCallback(
    () => {
      setCurrentHole(value => {
        const result = randomHole(holesCount, prevHole);
        prevHole = result;
        return result;
      })
    },
    []
  );

  useEffect(() => {
    if (isStart) {
      initialTimeoutGenerationHole.current = setTimeout(
        generationHole, 20
      );
    }
  }, [isStart]);

  useEffect(() => {
    if (currentHole !== null && isStart) {
      timeoutGenerationHole.current = setTimeout(
        () => {
          if (!click) failsWithoutClick()
        }, difficultyTime[difficulty])
    }
  }, [currentHole]);

  useEffect(
    () => {
      if (fails >= 3||score===100) {
        stopGame();
      }
    },
    [fails,score]
  );

  useEffect(
    () => {
      if (score&&score%10===0) {
        dispatch(incrementState('difficulty'));
        dispatch(updateTime(difficultyTime[difficulty]));
      }
    },
    [score]
  );

  const stopGame = useCallback(
    () => {
      clearTimeout(timeoutGenerationHole.current);
      clearTimeout(initialTimeoutGenerationHole.current);
      clearTimeout(timeoutGenerationHoleWithOutClick.current);
      setCurrentHole(null);
    },
    []
  );

  const failsWithoutClick = useCallback(
    () => {
      dispatch(incrementState('fails'));
      clearTimeout(timeoutGenerationHole.current);
      setCurrentHole(null);

      timeoutGenerationHoleWithOutClick.current = setTimeout(
        () => {
          generationHole()
        },
        20
      )
    },
    []
  );

  const clickMole = useCallback(
    debounce(() => {
      setCurrentHole(null);
      click = true;
      dispatch(incrementState('score'));
      clearTimeout(timeoutGenerationHole.current);

      timeoutGenerationHole.current = setTimeout(
        () => {
          generationHole()
          click = false
        },
        20
      )
    }, 40),
    []
  );

  const handleClickMole = useCallback(
    (event) => {
      event.target.parentNode.classList.add(classes.success);
      setTimeout(()=>event.target.parentNode.classList.remove(classes.success),40);
      event.stopPropagation();
      clickMole();
    },
    []
  );

  const handleMissClick = useCallback(
    debounce((event) => {
      clearTimeout(timeoutGenerationHole.current);
      setCurrentHole(null);
      dispatch(incrementState('fails'));
      event.target.classList.add(classes.fail);
      setTimeout(()=>event.target.classList.remove(classes.fail),40);

      timeoutGenerationHole.current = setTimeout(
        generationHole,
        20
      )
    }, 40),
    []
  );

  useEffect(
    ()=>()=>stopGame(),
    []
  )

  return (
    <PlayZoneView
      onMissClick={handleMissClick}
      onClickMole={handleClickMole}
      holesCount={holesCount}
      activeHole={currentHole}
    />
  );
}

export default PlayZone;
