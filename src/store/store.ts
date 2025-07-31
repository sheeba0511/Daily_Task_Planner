import { configureStore } from "@reduxjs/toolkit";
import taskModalSliceReducer from "./taskModalSlice";
import eventModalReducer from "./eventModalSlice";

export const store = configureStore({
  reducer: {
    taskModal: taskModalSliceReducer,
    eventModals: eventModalReducer,
  },
});
