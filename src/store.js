import { thunk, action, computed, createStore } from "easy-peasy";
import { api } from "./api/posts";
export const store = createStore({
  posts: [],
  width: window.innerWidth,
  height: window.innerHeight,

  setPosts: action((state, payload) => {
    state.posts = payload;
  }),

  setWindowSize: action((state, payload) => {
    state.width = payload.width;
    state.height = payload.height;
  }),

  fetchPosts: thunk(async (actions) => {
    const response = await api.get("/posts");
    actions.setPosts([...response.data].reverse());
  }),

  addPost: thunk(async (actions, newPost) => {
    await api.post("/posts", newPost);
    // actions.fetchPosts();
  }),

  editPost: thunk(async (actions, payload) => {
    const { postId, editOptions } = payload;
    await api.put(`/posts/${postId}`, editOptions);
    // actions.fetchPosts();
  }),

  delPost: thunk(async (actions, payload) => {
    await api.delete(`/posts/${payload}`);
  }),

  postCount: computed((state) => state.posts.length),
});

export default store;
