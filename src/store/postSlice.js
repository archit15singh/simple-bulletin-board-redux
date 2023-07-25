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
    incrementLike: (state, action) => {
      const {buttonName, postId} = action.payload
      for (let i=0; i<state.data.length;i++) {
        if (state.data[i].id === postId) {
          for (const item of state.data[i].likeButtons) {
            if (item.name === buttonName.name) {
              item.count += 1
            }
          }
        }
      }
    }
  },
});

export const { addPost, deletePost, incrementLike } = postSlice.actions;
export const reducers = postSlice.reducer;
