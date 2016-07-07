import React from 'react';

import './styles.module.css';

function Badges({badges}) {
  return (
    <div className='badges'>
      {badges.map((item, index) => {
        return (
          <div className='badge' key={index}>{item}</div>
        );
      })}
    </div>
  );
}
export default Badges;
