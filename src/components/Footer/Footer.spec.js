import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import config from 'config';
import Footer from './Footer';

describe('<Footer />', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('has a logo', () => {
    expect(wrapper.find('img'))
      .to.have.length(1);
  });
  it('has the as many FooterBlocks as in the lang file', () => {
    expect(wrapper.find('FooterBlock').length)
      .to.equal(config.lang.footer.length);
  });
});
