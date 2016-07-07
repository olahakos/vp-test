import React from 'react';

import './styles.module.css';

import config from 'config';
import FooterBlock from './FooterBlock';

export class Footer extends React.Component {
  render() {
    return (
      <div className='bottombar flexcnt'>
        <div className='logo'>
          <img src={require('assets/footer_logo.png')} />
        </div>
        <div>
          <FooterBlock data={config.lang.footer[0]}/>
        </div>
        <div>
          <FooterBlock data={config.lang.footer[1]}/>
          <FooterBlock data={config.lang.footer[2]}/>
        </div>
        <div>
          <FooterBlock data={config.lang.footer[3]}/>
        </div>
        <div>
          <FooterBlock data={config.lang.footer[4]}/>
        </div>
        <div>
          <FooterBlock data={config.lang.footer[5]}/>
        </div>
      </div>
    );
  }
}

export default Footer;
