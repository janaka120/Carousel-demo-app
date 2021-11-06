import React from 'react';
import renderer from 'react-test-renderer';
import CircleButton from '../CircleButton';

test('CircleButton renders correctly', () => {
  const mockOnPressFn = jest.fn();
  const tree = renderer
    .create(<CircleButton title="<" onPress={mockOnPressFn} disabled={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
