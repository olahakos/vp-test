import React from 'react';

import './styles.module.css';

export class Item extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <li
        className='item'
        onClick={this.props.onItemClick.bind(this)}
      >{item.name}</li>
    );
  }
}

export default Item;
