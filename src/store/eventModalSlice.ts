import { createSlice } from "@reduxjs/toolkit";
import { ModalType } from "../utils/EnumAndOptions";

const initialState = {
  eventData: null,
  eventModalOpen: false,
  EventModalType: ModalType.CREATE,
};

const eventModalSlice = createSlice({
  name: "eventModals",
  initialState,
  reducers: {
    eventOpenModal: (state, action) => {
      state.eventModalOpen = true;
      state.EventModalType = action.payload.type;
      state.eventData = action.payload.data || null;
    },
    eventCloseModal: (state) => {
      state.eventModalOpen = false;
      state.EventModalType = ModalType.CREATE;
      state.eventData = null;
    },
  },
});
export const { eventOpenModal, eventCloseModal } = eventModalSlice.actions;
export default eventModalSlice.reducer;
