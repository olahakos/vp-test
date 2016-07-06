import React from 'react';

import './styles.module.css';
import 'font-awesome/css/font-awesome.css';

import config from 'config';
import Menu from 'components/Menu/Menu';
import Search from 'components/Search/Search';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: config.lang.menuItems,
      active: 1,
      userName: 'John Doe'
    };
  }
  render() {
    return (
      <div className='topbar flexcnt'>
        <div className='flexcnt'>
          <img className='logo' src={require('assets/header-logo.png')} alt='viaplay' />
          <Menu menuItems={this.state.menuItems} />
        </div>
        <div className='flexcnt'>
          <div className='profile'>{this.state.userName} <i className="fa fa-angle-down"></i>
          </div>
          <Search />
        </div>
      </div>
    );
  }
}

export default Header;
