import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'socialLinks',
  initialState: {
    facebook: true,
    twitter: true,
    linkedIn: true,
    gitHub: false,
    stackOverFlow: false,
  },

  reducers: {
    changeSocialLinkActiveState: (state, { payload }) => {
      const links = state;
      links[payload] = !links[payload];
      return links;
    },
  },
});

export default reducer;

export const { changeSocialLinkActiveState } = actions;
