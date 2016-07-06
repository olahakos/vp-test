import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Search from './Search';

describe('<Search />', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('has a search icon', () => {
    expect(wrapper.find('img'))
      .to.have.length(1);
  });
  it('has an active state, where the background is bigger, and the icon is invisible');
});
