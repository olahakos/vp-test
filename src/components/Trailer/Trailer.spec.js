import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Trailer from './Trailer';

describe('<Trailer />', function () {
  let wrapper;
  const testTrailer = {
    image: 'http://i.viaplay.com/scandi/Viaplay_Prod_-_Scandi/808/440/V05898_landscape_GE-1434222861467.jpg?width=960&height=540&token=3ea2aeaa',
    title: 'Titanic'
  };

  beforeEach(() => {
    wrapper = shallow(<Trailer data={testTrailer} />);
  });

  it('has Trailer image', () => {
    expect(wrapper.find('img.coverImage'))
      .to.have.length(1);
  });
  it('has a play button image', () => {
    expect(wrapper.find('img.playButton'))
      .to.have.length(1);
  });
  it('has clickable play button');
});
