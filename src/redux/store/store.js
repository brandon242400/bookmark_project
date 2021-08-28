import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from '../reducers/bookmarkSlice';

export default configureStore({
  reducer: {
    bookmark: bookmarkReducer
  }
});