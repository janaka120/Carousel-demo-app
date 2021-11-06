import React from 'react';
import renderer from 'react-test-renderer';
import FullLoader from '../FullLoader';

test('FullLoader renders correctly', () => {
  const tree = renderer.create(<FullLoader />).toJSON();
  expect(tree).toMatchSnapshot();
});
