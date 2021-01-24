import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'jobList',
  initialState: [],
  reducers: {
    addJobToList: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { addJobToList } = actions;
export default reducer;
