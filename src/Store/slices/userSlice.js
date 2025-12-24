import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  blog: [],
  isLoggedIn:false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.blog = action.payload.blog;
      state.isLoggedIn = true
      return state
    },
    logout: (state) => {
      state.name = null;
      state.email = null;
      state.blog = [];
      state.isLoggedIn =false
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
