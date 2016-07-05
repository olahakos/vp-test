import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('has a Logo component', () => {
    expect(wrapper.find('.logo'))
      .to.have.length(1);
  });
  it('has a Menu component', () => {
    expect(wrapper.find('Menu'))
      .to.have.length(1);
  });
  it('has a profile dropdown element', () => {
    expect(wrapper.find('.profile'))
      .to.have.length(1);
  });
  it('has a search button', () => {
    expect(wrapper.find('.search'))
      .to.have.length(1);
  });
});
