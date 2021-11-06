import React from 'react';
import renderer from 'react-test-renderer';
import CarouselIndicator from '../CarouselIndicator';

test('CarouselIndicator renders correctly', () => {
  const tree = renderer
    .create(<CarouselIndicator length={4} selectedIndex={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
