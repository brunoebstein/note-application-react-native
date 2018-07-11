import '@jonny/react-native-mock/mock';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
global.React = React;

import ShallowRenderer from 'react-test-renderer/shallow';
function shallow(element) {
  const renderer = new ShallowRenderer();
  renderer.render(element);
  const wrapper = renderer.getRenderOutput();
  return wrapper;
}

global.matchSnapshot = function matchSnapshot(component) {
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
};
