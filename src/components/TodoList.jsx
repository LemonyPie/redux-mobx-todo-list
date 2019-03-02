import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>Your todos</h2>
        <ul className="todo-list">
          <li className="todo-list__item"><label><input type="checkbox"/>Buy milk</label></li>
        </ul>
      </section>
    );
  }
}

export default TodoList;
