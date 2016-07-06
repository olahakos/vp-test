import React from 'react';

import './styles.module.css';

export class Imdb extends React.Component {
  render() {
    const data = this.props.data;
    const lang = this.props.lang;
    return (
      <div className='imdb'>
        <a href={data.url} target='_blank'>
          <img src={require('assets/imdb.jpg')} alt='imdb'/>
        </a>
        <div className='rating'>{data.rating}</div>
        <div className='fan'>
          {lang.replace('%s', data.votes)}
        </div>
      </div>
    );
  }
}

export default Imdb;
