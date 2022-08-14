import React from 'react';
import { shallow } from 'enzyme';
import Language from '../../components/Language';

describe('<Languages />', () => {
  const languages = shallow(<Language />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });
});
