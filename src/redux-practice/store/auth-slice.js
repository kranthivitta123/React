import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isLoggedIn: false };

const authSlice = createSlice({
  name: "authenticate",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice;
