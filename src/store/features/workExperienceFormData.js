import { createSlice } from '@reduxjs/toolkit';
import { CITIESWITHOUTALL } from '../../constants/armenianCities';

const initialState = {
  jobTitle: '',
  company: '',
  city: CITIESWITHOUTALL[0],
  startDate: '',
  endDate: '',
  description: '',
};

const { reducer, actions } = createSlice({
  name: 'workExperienceFormData',
  initialState,
  reducers: {
    setJobField: (state, { payload: { name, value } }) => {
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

export const { setJobField, clearFields } = actions;

export default reducer;
