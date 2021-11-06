import React from 'react';
import Carousel from '../Carousel';
import {CarouselSource} from '../../constants/AppConstant';
import {renderScreen} from '../../../../utils/TestHelper';

test('should display Carousel first slider', async () => {
  const {title, description} = CarouselSource[0];
  const screen = await renderScreen(<Carousel list={CarouselSource} />);
  const header = await screen.findByText(title);
  // const subHeader = await screen.findAllByText(
  //   HomeLabels.CAROUSEL_IMAGE_CATEGORY,
  // );
  const info = await screen.findAllByText(description);
  const image = await screen.getByTestId(`${title}_image`);

  expect(header).toBeTruthy();
  // expect(subHeader[0]).toBeTruthy();
  expect(info[0]).toBeTruthy();
  expect(image).toBeTruthy();
});
