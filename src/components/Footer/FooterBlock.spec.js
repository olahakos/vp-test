import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FooterBlock from './FooterBlock';

describe('<FooterBlock />', function () {
  let wrapper;
  const testFooterBlock = {
    title: 'Viaplay',
    elements: ['HD', '12', 'FULL-HD']
  };
  beforeEach(() => {
    wrapper = shallow(<FooterBlock data={testFooterBlock} />);
  });

  it('has a title', () => {
    expect(wrapper.find('.footer-title'))
      .to.have.length(1);
  });
  it('has the given elements', () => {
    expect(wrapper.find('li.footer-item').length)
      .to.equal(testFooterBlock.elements.length);
  });
});
