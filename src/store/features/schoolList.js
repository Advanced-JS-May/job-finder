import { createSlice } from '@reduxjs/toolkit';

const makeId = () => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
};

const getId = makeId();

const initialState = [
  {
    id: 0,
    degree: 'javascript',
    school: 'Unknown organization',
    startDate: '12/2012',
    endDate: '05/2020',
    description:
      'So I got in touch with a select group of professional resume writers, coaches, and career experts to get their best resume summary examples you can copy and adapt into your own resume or CV.',
  },
  {
    degree: 'high school',
    school: 'n153 school',
    startDate: '03 / 2011',
    endDate: '05 / 2016',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati quisquam impedit vero. Ab, quisquam harum! Sed magnam totam quis vel, error animi magni odit, optio, ipsam quos perspiciatis! Eius, magnam?',
    id: 'a123',
  },
];

const { reducer, actions } = createSlice({
  name: 'jobList',
  initialState,
  reducers: {
    addSchoolToList: (state, { payload }) => {
      const id = getId();
      state.push({ ...payload, id });
    },

    removeSchoolFromList: (state, { payload: { id } }) => {
      const newState = state.filter((job) => job.id !== id);
      return newState;
    },
  },
});

export const { addSchoolToList, removeSchoolFromList } = actions;
export default reducer;
