import { createSlice } from "@reduxjs/toolkit";
import localMemory from "../../helpers/memory";

const bookmarkMemoryObj = new localMemory();

export const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    bookmarks: bookmarkMemoryObj.getList()
  },
  reducers: {
    removeBookmark: (state, action) => {
      delete state.bookmarks[action.payload.name];
      bookmarkMemoryObj.updateList(state.bookmarks);
    },
    addBookmark: (state, action) => {
      state.bookmarks[action.payload.name] = action.payload.URL;
      bookmarkMemoryObj.updateList(state.bookmarks);
    }
  }
});

export const {removeBookmark, addBookmark} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;