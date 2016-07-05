import React from 'react';

import './styles.module.css';
import config from 'config';

const App = React.createClass({
  render: function() {
    return (
      <div className='wrapper'>
        <h1>
          Environment: {config.env}
        </h1>
      </div>
    );
  }
});

module.exports = App;
