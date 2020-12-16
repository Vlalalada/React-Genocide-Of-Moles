import React from 'react';
import classes from './Mole.module.scss';

function Mole({isActive=true,onMissClick,onClickMole}){
    return(
        <div className={classes.root} 
        style={{background: 'url("./assets/hole.png") bottom center no-repeat'}}
        onClick={onMissClick}>
            {
                isActive&&
                <img 
                className={classes.mole} 
                src="./assets/mole.png" 
                alt="mole"
                onClick={onClickMole}
                />
            }
        </div>
    );
}

export default Mole;