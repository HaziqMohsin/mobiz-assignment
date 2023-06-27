import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GlobalState = {
  isSidebarOpen: boolean;
  categoryList: [];
};

const initialState: GlobalState = {
  isSidebarOpen: false,
  categoryList: [],
};

export const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    getListCategories: (state, action: PayloadAction<any>) => {
      state.categoryList = action.payload;
    },
  },
});

export const { openSidebar, closeSidebar, getListCategories } = global.actions;

export default global.reducer;
