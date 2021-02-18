import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

const ToDoList = (props) => {
  return (
    <>
      <div className="todo__style">
        <ul>
          {props.todos.map((todo, index) => (
            <li key={index}>
              {todo.message}

              <i
                onClick={() => props.dispatch(deleteTodo(todo.id))}
                className="fa fa-times"
                aria-hidden="true"
                // onClick={() => {
                //   props.onSelect(props.id);
                // }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(ToDoList);
