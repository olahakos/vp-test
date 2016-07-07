import React, { PropTypes } from 'react';
import { Router } from 'react-router';

import './styles.module.css';

class App extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    return (
      <div style={ { height: '100%' } }>
        <Router
          routes={this.props.routes}
          history={this.props.history} />
      </div>
    );
  }
};

module.exports = App;
