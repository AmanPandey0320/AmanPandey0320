import { configureStore } from "@reduxjs/toolkit";
import utilSlice from "./util";

/**
 *
 */
const store = configureStore({
  reducer: {
    util: utilSlice.reducer,
  },
});

export default store;
