import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mp3: null,
  midi: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateMidi: (state, action) => {
      state.midi = action.payload;
    },
  },
});

export const { updateMidi } = appSlice.actions;

export default appSlice.reducer;
