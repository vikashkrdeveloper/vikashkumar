import { createSlice } from "@reduxjs/toolkit";
export interface userDetailsSliceProps {
  uid: string;
  name: string;
  email: string;
  phone: number;
  token: string;
  role: string;
  isLogged: boolean;
  isGestLogin: boolean;
  isGestUser: boolean;
}

const initialState: userDetailsSliceProps = {
  uid: "b7f14c2e-5c53-4b99-9a27-6d9f51e8b2c2",
  name: "Gest User",
  email: "",
  phone: 0,
  token: "",
  role: "",
  isLogged: false,
  isGestLogin: true,
  isGestUser: true,
};

const userDetailsSlice = createSlice({
  name: "userDetailsSlice",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.uid = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isLogged = action.payload.isLogged;
      state.isGestLogin = action.payload.isGestLogin;
      state.isGestUser = action.payload.isGestUser;
    },
    removeUserDetails: (state) => {
      state.uid = "";
      state.name = "";
      state.email = "";
      state.phone = 0;
      state.token = "";
      state.role = "";
      state.isLogged = false;
      state.isGestLogin = true;
      state.isGestUser = true;
    },
  },
});

export const { setUserDetails, removeUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
