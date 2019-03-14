import React, { Component } from 'react';
import { ADD_TODO } from "../actions/types";
import { connect } from 'react-redux';
import './AddTodo.scss';

class AddTodo extends Component {
  constructor(props){
    super(props);

    this.state = {
      newTodoName: ''
    };
  }

  handleChange = (event) => {
    this.setState({ newTodoName: event.target.value });
  };

  handleClick = (event) => {
    event.preventDefault();

    if(this.state.newTodoName) {
      this.props.addTodo(this.state.newTodoName);
      this.setState({newTodoName: ''});
    }
  };

  render() {
    return (
      <section className="addTodo">
        <h2>New todo</h2>
        <div>
          <form onSubmit={ this.handleClick }>
            <input
              type="text"
              className="text-input"
              placeholder="New todo name"
              value={ this.state.newTodoName }
              onChange={ this.handleChange }
            />
            <button
              className="button"
              onClick={ this.handleClick }
            >
              Add
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: todo => {
      dispatch({
        type: ADD_TODO,
        name: todo
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
