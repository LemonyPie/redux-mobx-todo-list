import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_TODO_STATUS, REMOVE_TODO } from "../actions/types";
import './TodoList.scss';

class TodoList extends Component {

  handleClick = (id) => {
    this.props.toggleTodoStatus(id);
  };

  handleRemove = (id) => {
    this.props.removeTodo(id);
  };

  render() {
    const { todos } = this.props;
    return (
      <section className="todo-list-section">
        <h2>Your todos</h2>
        { todos.length
          ? ( <ul className="todo-list">
          { todos.map( todo => (
            <li key={todo.id} className="todo-list__item">
              <label className="checkbox-input">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => { this.handleClick(todo.id) } }
                />
                <span className="checkbox-input__check" />
                { todo.name }
              </label>
              <button
                className="todo-list__remove-item"
                onClick={ () => { this.handleRemove(todo.id) } }
              >Remove todo</button>
            </li>
            ))}
          </ul> )
          : ( <p>You have no active todos</p> )
        }
      </section>
    );
  }
}

function mapStateToProps(state){
  const { todos, visibilityFilter } = state;
  const { searchText, status } = visibilityFilter;

  const filterByStatus = (todo) => {
    switch(status){
      case 'ACTIVE':
        return !todo.completed;
      case 'COMPLETED':
        return todo.completed;
      default:
        return true;
    }
  };

  return {
    todos: todos
      .filter( filterByStatus )
      .filter( todo => todo.name.toLowerCase().includes(searchText.toLocaleLowerCase()) )
      .sort( (a, b) => a.completed - b.completed)
  };
}

function mapDispatchToProps(dispatch){
  return {
    toggleTodoStatus: todo => {
      return dispatch({
        type: TOGGLE_TODO_STATUS,
        id: todo
      })
    },
    removeTodo: todo => {
      return dispatch({
        type: REMOVE_TODO,
        id: todo
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
