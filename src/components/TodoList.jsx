import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './TodoList.scss';

@inject('store')
@observer
class TodoList extends Component {
  render() {
    const todos = this.props.store.visibleTodos;

    return (
      <section className="todo-list-section">
        <h2>Your todos</h2>
        <ul className="todo-list">
          { todos.map( todo => (
            <li className="todo-list__item" key={todo.id}>
              <label className="checkbox-input">
                <input
                  type="checkbox"
                  checked={ todo.completed }
                  // onChange={ () => todo.completed = !todo.completed }
                  onChange={ () => this.props.store.toggleTodoStatus(todo.id) }
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

export default TodoList;
