import React from 'react';

import './styles.module.css';

function FooterBlock({data}) {
  return (
    <div className='footer-block'>
      <div className='footer-title'>{data.title}</div>
      <ul>
        {data.elements.map((item, index) => {
          return (
            <li className='footer-item' key={index}>
              <a href='#'>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default FooterBlock;
