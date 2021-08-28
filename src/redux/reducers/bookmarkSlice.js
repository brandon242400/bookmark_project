/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';
import LocalMemory from '../../helpers/memory';

// const bookmarkMemoryObj = new LocalMemory();

export const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    bookmarks: LocalMemory.getList(),
  },
  reducers: {
    removeBookmark: (state, action) => {
      delete state.bookmarks[action.payload.name];
      LocalMemory.updateList(state.bookmarks);
    },
    addBookmark: (state, action) => {
      state.bookmarks[action.payload.name] = action.payload.URL;
      LocalMemory.updateList(state.bookmarks);
    },
  },
});

export const { removeBookmark, addBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
