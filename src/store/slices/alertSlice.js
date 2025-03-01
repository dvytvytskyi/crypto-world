import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertType: null,
  alertText: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert(state, action) {
      state.alertType = action.payload.alertType;
      state.alertText = action.payload.alertText;
    },
  },
});
export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;
