import { createSlice } from "@reduxjs/toolkit";
import { ModalType } from "../utils/EnumAndOptions";

const initialState = {
  taskModalOpen: false,
  taskModalType: ModalType.CREATE,
  taskData: null,
};

const taskModalSlice = createSlice({
  name: "taskModal",
  initialState,
  reducers: {
    taskOpenModal: (state, action) => {
      state.taskModalOpen = true;
      state.taskModalType = action.payload.type;
      state.taskData = action.payload.data || null;
    },
    taskCloseModal: (state) => {
      state.taskModalOpen = false;
      state.taskModalType = ModalType.CREATE;
      state.taskData = null;
    },
  },
});

export const { taskOpenModal, taskCloseModal } = taskModalSlice.actions;
export default taskModalSlice.reducer;
