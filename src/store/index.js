import { configureStore } from "@reduxjs/toolkit";
import monthsReducer from './monthsSlice';

const store = configureStore({
  reducer: {
    months: monthsReducer
  }
});

export default store;