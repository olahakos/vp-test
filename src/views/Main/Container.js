import React from 'react';

import Header from 'components/Header/Header';

import './styles.module.css';

export class Container extends React.Component {

  render() {
    let children = null;
    if (this.props.children) {
      children = this.props.children;
    }

    return (
      <div>
        <Header />
        <div className='content'>
          {children}
        </div>
      </div>
    );
  }
}

export default Container;
