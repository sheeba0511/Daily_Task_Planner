import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskModalOpen: false,
  taskModalType: "create",
  editTaskData: null,
};

const taskModalSlice = createSlice({
  name: "taskModal",
  initialState,
  reducers: {
    taskOpenModal: (state, action) => {
      state.taskModalOpen = true;
      state.taskModalType = action.payload.type;
      state.editTaskData = action.payload.data || null;
    },
    taskCloseModal: (state) => {
      state.taskModalOpen = false;
      state.taskModalType = "create";
      state.editTaskData = null;
    },
  },
});

export const { taskOpenModal, taskCloseModal } = taskModalSlice.actions;
export default taskModalSlice.reducer;
