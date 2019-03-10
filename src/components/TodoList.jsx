import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoList.scss';

class TodoList extends Component {

  handleClick = (id) => {
    this.props.toggleTodoStatus(id);
  };

  render() {
    const { todos } = this.props;
    return (
      <section className="todo-list-section">
        <h2>Your todos</h2>
        <ul className="todo-list">
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
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

function mapStateToProps(state){
  const { todos } = state;
  return { todos };
}

function mapDispatchToProps(dispatch){
  return {
    toggleTodoStatus: todo => {
      return dispatch({
        type: 'TOGGLE_TODO_STATUS',
        id: todo
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
