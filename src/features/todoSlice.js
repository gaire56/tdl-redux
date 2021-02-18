import { createSlice } from '@reduxjs/toolkit';

const ADD = 'ADD';
const addTodo = (message) => ({
  type: ADD,
  message,
  id: Math.random(),
});
const DELETE = 'DELETE';
const deleteTodo = (id) => ({
  type: DELETE,
  id,
});
