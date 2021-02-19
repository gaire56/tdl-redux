import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import ToDoList from './ToDoList';

const AddTodo = (props) => {
  return (
    <>
      <div className="app">
        <div className="center__div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.target.userInput.value;
              props.dispatch(addTodo(input));
              e.target.userInput.value = '';
            }}
          >
            <input name="userInput" placeholder="add todo ..." type="text" />
            <button>+</button>
          </form>
          <ol>
            <ToDoList />
          </ol>
        </div>
      </div>
    </>
  );
};

export default connect()(AddTodo);
