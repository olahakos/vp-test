import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Menu from './Menu';

describe('<Menu />', function () {
  let wrapper;
  const testMenu = [
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
    }];

  beforeEach(() => {
    wrapper = shallow(<Menu menuItems={testMenu} />);
  });

  it('has .menu class', () => {
    expect(wrapper.find('.menu'))
      .to.have.length(1);
  });
  it('contains all of the items', () => {
    expect(wrapper.find('Item').length)
      .to.equal(testMenu.length);
  });
});
