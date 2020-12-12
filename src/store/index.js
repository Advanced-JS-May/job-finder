import { configureStore } from '@reduxjs/toolkit';
import reducer from './features';

const store = configureStore({ reducer });

export default store;
