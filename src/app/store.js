// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/todoSlice';
import { createStore } from 'redux';
import todoReducer from '../reducers';

const store = createStore(todoReducer);
export default store;
