import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoList.scss';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <section className="todo-list-section">
        <h2>Your todos</h2>
        <ul className="todo-list">
          { todos.map( todo => (
            <li key={todo.id} className="todo-list__item">
              <label className="checkbox-input">
                <input type="checkbox"/>
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

export default connect(mapStateToProps)(TodoList);
