import { createSlice } from "@reduxjs/toolkit";
import { setKeyValue } from "./reducer";

const utilSlice = createSlice({
  name: "util",
  initialState: {
    data: {
      drawer: 0,
      uid:null
    },
  },
  reducers: {
    setKeyValue,
  },
});

export default utilSlice;
export const utilAction = utilSlice.actions;
