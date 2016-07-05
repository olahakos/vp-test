import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import './styles.module.css';
import config from './config.js';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <div className='wrapper'>
          <p>hello 1</p>
        </div>
        <div className='no-wrapper'>
          <p>Environment: {config.env}</p>
        </div>
      </div>
    );
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
