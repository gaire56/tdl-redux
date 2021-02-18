import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

const AddTodo = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const input = e.target.userInput.value;
        props.dispatch(addTodo(input));
        e.target.userInput.value = '';
      }}
    >
      <input name="userInput" type="text" />
      <button>Submit</button>
    </form>
  );
};

export default connect()(AddTodo);
