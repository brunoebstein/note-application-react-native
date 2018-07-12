import { shallow } from './shallow';

export const matchSnapshot = component => {
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
};
