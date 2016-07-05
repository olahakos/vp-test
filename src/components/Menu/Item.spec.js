import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Item from './Item';

describe('<Item />', function () {
  let wrapper;
  const testItem = {
    name: 'test item',
    url: '/test_item'
  };

  beforeEach(() => {
    wrapper = shallow(<Item
      item={testItem}
      onItemClick={() => {}}
      key={testItem.url} />);
  });

  it('has the given name', () => {
    expect(wrapper.find('li').first().text())
      .to.equal(testItem.name);
  });
});
