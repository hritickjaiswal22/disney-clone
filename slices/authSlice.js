import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  name: null,
  email: null,
  photo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    saveUser(currentState, action) {
      const { name, email, photo } = action.payload;
      currentState.name = name;
      currentState.email = email;
      currentState.photo = photo;
    },
  },
});

export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
