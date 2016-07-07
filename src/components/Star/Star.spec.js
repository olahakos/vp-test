import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Star from './Star';

describe('<Star />', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Star stared={false} />);
  });

  it('has a Star', () => {
    expect(wrapper.find('i'))
      .to.have.length(1);
  });
});
