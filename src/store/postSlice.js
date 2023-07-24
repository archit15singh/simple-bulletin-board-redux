import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.data.push(action.payload);
    },
    deletePost: (state, action) => {
      state.data = state.data.filter((post) => {
        return post.id !== action.payload
      });
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export const reducers = postSlice.reducer;
