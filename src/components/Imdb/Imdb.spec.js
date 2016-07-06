import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import config from 'config';
import Imdb from './Imdb';

describe('<Imdb />', function () {
  let wrapper;
  const testImdb = {
    rating: '7.7',
    url: 'http://imdb.com',
    votes: '794 222',
    id: 'tt12312'
  };

  beforeEach(() => {
    wrapper = shallow(<Imdb data={testImdb} lang={config.lang.fan} />);
  });

  it('has Imdb logo', () => {
    expect(wrapper.find('img'))
      .to.have.length(1);
  });
  it('has rating', () => {
    expect(wrapper.find('.rating'))
      .to.to.have.length(1);
  });
  it('has fan counter with the propper language', () => {
    expect(wrapper.find('.fan').first().text())
      .to.equals(config.lang.fan.replace('%s', testImdb.votes));
  });
});
