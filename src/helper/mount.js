import './enzyme';

export { mount } from 'enzyme';

import { JSDOM } from 'jsdom';

// @TODO: update global just for the current test
global.window = new JSDOM('').window;
Object.keys(window).forEach(property => {
  if (typeof global[property] === 'undefined') {
    global[property] = window[property];
  }
});
