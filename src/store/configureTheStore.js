import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./darkTheme.js";

const my__store = configureStore({
  reducer: {
    dark_theme: themeSlice.reducer,
  },
});

export default my__store;
