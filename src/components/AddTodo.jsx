import React, { Component } from 'react';
import './AddTodo.scss';
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class AddTodo extends Component {
  constructor(props){
    super(props);

    this.state = {
      newTodoName: ''
    }
  }

  handleAddTodo = () => {
    this.props.store.addNewTodo(this.state.newTodoName);
    this.setState({ newTodoName: '' });
  };

  render() {
    return (
      <form
        className="addTodo"
        onSubmit={ e => {
          e.preventDefault(); this.handleAddTodo()
        }}
      >
        <legend>New todo</legend>
        <fieldset>
          <input
            type="text"
            className="text-input"
            placeholder="New todo name"
            value={this.state.newTodoName}
            onChange={ e => { this.setState({newTodoName: e.target.value}) }}
          />
          <button
            className="button"
            type="button"
            onClick={ this.handleAddTodo }
          >Add</button>
        </fieldset>
      </form>
    );
  }
}

export default AddTodo;
