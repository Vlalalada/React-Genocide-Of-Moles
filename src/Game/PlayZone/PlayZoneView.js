import React from 'react';
import Mole from './Mole/Mole';
import classes from './PlayZone.module.scss';

function PlayZoneView({activeHole = null,holesCount = 0,...props}){
  return (
    <div className={ classes.root }>
      {
        Array.from({ length: holesCount }, (value, index) => (
          <Mole
            key={ `mole-${ index }` }
            isActive={ activeHole !== null && activeHole === index }
            { ...props }
          />
        ))
      }
    </div>
  );
};

export default PlayZoneView;
