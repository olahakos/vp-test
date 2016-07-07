import React from 'react';

import './styles.module.css';

export class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stared: props.stared
    };
  }
  render() {
    const starClass = (this.state.stared) ? 'starBox stared' : 'starBox';
    return (
      <a className={starClass} href='#'>
        <i className='fa fa-star fa-lg' aria-hidden='true'></i>
      </a>
    );
  }
}

export default Star;
