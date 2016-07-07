import React from 'react';

import './styles.module.css';

export class Item extends React.Component {
  render() {
    const item = this.props.item;
    const actClass = (this.props.isActive) ? 'active' : '';
    return (
      <li className='item'
      ><a href='#' className={actClass}>{item.name}</a></li>
    );
  }
}

export default Item;
