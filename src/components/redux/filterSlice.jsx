import { createSlice } from '@reduxjs/toolkit';

const initialFilter = '';
const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilter,
  reducers: {
    statusFilter(state, action) {
      state.status = action.payload;
    },
  },
});
export const { statusFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
