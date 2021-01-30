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
    jobTitle: 'Junior javaScript Developer',
    company: 'Unknown organization',
    city: 'Yerevan',
    startDate: '12/2012',
    endDate: '05/2020',
    description:
      'So I got in touch with a select group of professional resume writers, coaches, and career experts to get their best resume summary examples you can copy and adapt into your own resume or CV.',
  },
  {
    jobTitle: 'mt new job',
    company: 'a new company',
    city: 'Goris',
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
    addJobToList: (state, { payload }) => {
      const id = getId();
      state.push({ ...payload, id });
    },

    removeJobFromList: (state, { payload: { id } }) => {
      const newState = state.filter((job) => job.id !== id);
      return newState;
    },
  },
});

export const { addJobToList, removeJobFromList } = actions;
export default reducer;
