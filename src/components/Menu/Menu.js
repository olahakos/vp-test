import React from 'react';

import Item from './Item';
import './styles.module.css';

export class Menu extends React.Component {

  render() {
    return (
      <ul className='menu'>
      {this.props.menuItems.map((item, index) => {
        const act = (index === this.props.active);
        return (
          <Item
            item={item}
            key={index}
            isActive={act}
            />
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
