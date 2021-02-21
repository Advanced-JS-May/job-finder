import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  degree: '',
  school: '',
  startDate: '',
  endDate: '',
  description: '',
};

const { reducer, actions } = createSlice({
  name: 'educationData',
  initialState,
  reducers: {
    setField: (state, { payload: { name, value } }) => {
      const newState = state;

      newState[name] = value;

      return newState;
    },
    clearFields: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { clearFields, setField } = actions;

export default reducer;
