import React from 'react';

import './styles.module.css';

function Trailer({data}) {
  return (
    <a className='trailer' href='#'>
      <img src={data.image} alt={data.title} className='coverImage' />
      <img src={require('assets/play_button.png')} className='playButton' />
    </a>
  );
}

export default Trailer;
