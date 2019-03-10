import React, { Component } from 'react';
import './AddTodo.scss';
import { connect } from 'react-redux';
import crypto from 'crypto';

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

  handleClick = () => {
    this.props.addTodo( this.state.newTodoName );
    this.setState({ newTodoName: '' });
  };

  render() {
    return (
      <section className="addTodo">
        <h2>New todo</h2>
        <div>
          <input
            type="text"
            className="text-input"
            placeholder="New todo name"
            value={ this.state.newTodoName }
            onChange={ this.handleChange }
          />
          <button className="button" onClick={ this.handleClick }>Add</button>
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
        type: 'ADD_TODO',
        id: crypto.randomBytes(20).toString('hex'),
        name: todo
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
