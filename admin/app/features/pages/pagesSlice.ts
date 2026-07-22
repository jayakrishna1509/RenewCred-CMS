import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Page {
  _id: string;
  title: string;
  slug: string;
}

interface PagesState {
  pages: Page[];
}

const initialState: PagesState = {
  pages: [],
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPages: (state, action: PayloadAction<Page[]>) => {
      state.pages = action.payload;
    },

    clearPages: (state) => {
      state.pages = [];
    },
  },
});

export const { setPages, clearPages } = pagesSlice.actions;

export default pagesSlice.reducer;