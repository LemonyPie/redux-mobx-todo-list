import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <section>
        <h2>New todo</h2>
        <div>
          <input type="text"/>
          <button>Add</button>
        </div>
      </section>
    );
  }
}

export default AddTodo;
