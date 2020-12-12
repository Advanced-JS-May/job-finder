import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'jobSeeker',
  initialState: {},
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state = payload;
      return state;
    },
    changeField: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
});

export default reducer;

export const { setCurrentUser, changeField } = actions;
