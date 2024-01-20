import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  Uni: null,
  email: null,
  Interest: [],
  role: null,
  uniqueId: null,
  step: null,
  company: null,
  preview: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
    },
    setPreview: (state, action) => {
      state.preview = action.payload.preview;
    },
    setCompany: (state, action) => {
      state.company = action.payload.company;
    },
    setStep: (state, action) => {
      state.step = action.payload.step;
    },
    setId: (state, action) => {
      state.uniqueId = action.payload.uniqueId;
    },
    setRole: (state, action) => {
      state.role = action.payload.role;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },

    setUni: (state, action) => {
      state.Uni = action.payload.Uni;
    },
    setInterest: (state, action) => {
      state.Interest = action.payload.Interest;
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const {
  setUni,
  setLogin,
  setLogout,
  setInterest,
  setEmail,
  setRole,
  setId,
  setStep,
  setCompany,
  setPreview,
} = authSlice.actions;
export default authSlice.reducer;
