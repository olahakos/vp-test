import React from 'react';

import './styles.module.css';

export class Trailer extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className='trailer'>
        <img src={data.image} alt={data.title} className='coverImage' />
        <div className='playButton'></div>
      </div>
    );
  }
}

export default Trailer;
