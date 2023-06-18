import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GlobalState = {
  isSidebarOpen: boolean;
};

const initialState: GlobalState = {
  isSidebarOpen: false,
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
  },
});

export const { openSidebar, closeSidebar } = global.actions;

export default global.reducer;
