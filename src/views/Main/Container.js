import React from 'react';

import Header from 'components/Header/Header';

import './styles.module.css';

export class Container extends React.Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {});
    }

    return (
      <div>
        <Header />
        Hello from the container
        <div className='content'>
          {children}
        </div>
      </div>
    );
  }
}

export default Container;
