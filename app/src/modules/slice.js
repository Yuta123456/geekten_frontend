import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mp3: null,
  downloadUrl: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMp3: (state, action) => {
      state.mp3 = action.payload;
    },
    setDownloadUrl: (state, action) => {
      state.downloadUrl = action.payload;
    },
  },
});

export const { setMp3, setDownloadUrl } = appSlice.actions;

export default appSlice.reducer;
