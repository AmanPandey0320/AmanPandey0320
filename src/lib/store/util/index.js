import { createSlice } from "@reduxjs/toolkit";
import { setKeyValue } from "./reducer";

const utilSlice = createSlice({
  name: "util",
  initialState: {
    data: {
      drawer: 0,
    },
  },
  reducers: {
    setKeyValue,
  },
});

export default utilSlice;
export const utilAction = utilSlice.actions;
