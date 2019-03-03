import React, { Component } from 'react';
import './AddTodo.scss';

class AddTodo extends Component {
  render() {
    return (
      <section className="addTodo">
        <h2>New todo</h2>
        <div>
          <input type="text" className="text-input" placeholder="New todo name"/>
          <button className="button">Add</button>
        </div>
      </section>
    );
  }
}

export default AddTodo;
