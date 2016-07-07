import React from 'react';

import './styles.module.css';

export class Search extends React.Component {
  render() {
    return (
      <div className='search flexcnt'>
        <img src={require('assets/search.png')} alt='search' />
      </div>
    );
  }
}

export default Search;
