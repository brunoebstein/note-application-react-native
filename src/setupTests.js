import '@jonny/react-native-mock/mock';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
global.React = React;

import { shallow } from 'enzyme';
global.shallow = shallow;

global.matchSnapshot = function matchSnapshot(component) {
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
};
