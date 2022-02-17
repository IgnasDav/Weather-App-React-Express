import { configureStore } from "@reduxjs/toolkit";
import content from "../content";

const store = configureStore({
  reducer: {
    content: content.reducer,
  },
});
export default store;
