import React from 'react';
import renderer from 'react-test-renderer';
import {Hello} from '../src/components/HelloTypeScript';

it('renders correctly with default', () => {
  const button = renderer.create(<Hello name="World" enthusiamLevel={1} />).toJSON();
  expect(button).toMatchSnapshot();
});
