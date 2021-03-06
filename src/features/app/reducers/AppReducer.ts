import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CarouselSource} from './../constants/AppConstant';
import {CarouselModel} from './../models/App';
import {AppState} from '../models/AppReducer';

const initialState: AppState = {
  isInProgress: false,
  carouselList: CarouselSource,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    apiCallStarts: state => {
      state.isInProgress = true;
    },
    apiCallError: state => {
      state.isInProgress = false;
    },
    fetchCarouselListSuccess: (state, action: PayloadAction<CarouselModel>) => {
      state.carouselList = action.payload;
      state.isInProgress = false;
    },
  },
});

export const {apiCallStarts, apiCallError, fetchCarouselListSuccess} =
  appSlice.actions;

export default appSlice.reducer;
