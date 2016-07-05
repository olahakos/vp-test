import React from 'react';

import Menu from 'components/Menu/Menu';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          name: 'serier',
          url: '/serier'
        },
        {
          name: 'film',
          url: '/film'
        },
        {
          name: 'sport',
          url: '/sport'
        },
        {
          name: 'barn',
          url: '/barn'
        },
        {
          name: 'Hyrbutik',
          url: '/Hyrbutik'
        }
      ],
      active: 1
    };
  }
  render() {
    return (
      <div id='header'>
        <div className='logo'></div>
        <Menu menuItems={this.state.menuItems} />
      </div>
    );
  }
}

export default Header;
