import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./postSlice";

const store = configureStore({
  reducer: {
    posts: reducers,
  },
});

export default store;
