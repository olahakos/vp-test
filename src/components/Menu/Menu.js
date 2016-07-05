import React from 'react';

import Item from './Item';
import './styles.module.css';

export class Menu extends React.Component {

  onItemClick(obj) {
  };

  render() {
    return (
      <ul className='menu'>
      {this.props.menuItems.map(item => {
        return (
          <Item
            item={item}
            onItemClick={this.onItemClick.bind(this)}
            key={item.url} />
        );
      })}
      </ul>
    );
  }
}

Menu.contextTypes = {
  router: React.PropTypes.object
};

export default Menu;
