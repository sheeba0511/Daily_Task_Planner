import { configureStore } from "@reduxjs/toolkit";
import taskModalSliceReducer from "./taskModalSlice";
import eventModalReducer from "./eventModalSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    taskModal: taskModalSliceReducer,
    eventModals: eventModalReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
