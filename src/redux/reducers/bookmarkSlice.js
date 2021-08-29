/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, nanoid } from '@reduxjs/toolkit';
import LocalMemory from '../../helpers/memory';

// const bookmarkMemoryObj = new LocalMemory();

export const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    bookmarks: LocalMemory.getList(),
  },
  reducers: {
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter((bookmark) => {
        if (action.payload !== bookmark.linkID) {
          return true;
        }
        return false;
      });
      LocalMemory.updateList(state.bookmarks);
    },
    addBookmark: {
      reducer: (state, action) => {
        state.bookmarks.push(action.payload);
        LocalMemory.updateList(state.bookmarks);
      },
      prepare: (linkName, linkURL) => ({
        payload: {
          linkName,
          linkURL,
          linkID: nanoid(),
        },
      }),
    },
  },
});

export const { removeBookmark, addBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
