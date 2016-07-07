import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Badges from './Badges';

describe('<Badges />', function () {
  let wrapper;
  const testBadges = ['HD', '12', 'FULL-HD'];
  beforeEach(() => {
    wrapper = shallow(<Badges badges={testBadges} />);
  });

  it('has a given number of Badge component', () => {
    expect(wrapper.find('.badge').length)
      .to.equal(testBadges.length);
  });
});
