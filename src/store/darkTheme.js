import { createSlice } from "@reduxjs/toolkit";

//create the main store wich stores all the states
//the initial state is white beige color,  then i need the reducers to specify how the state is transformed by action take 2 params:
//then i will need the reducers that will emit an action

const initialState = {
  theme: JSON.parse(localStorage.getItem("theme")) ?? true,
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toggleTheme(state) {
      const nextState = (state.theme =
        state.theme === "light" ? "dark" : "light");
      localStorage.setItem("theme", JSON.stringify(nextState));
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
