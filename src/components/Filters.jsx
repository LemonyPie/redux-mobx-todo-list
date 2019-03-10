import React, { Component } from "react";
import { connect } from 'react-redux';
import './Filters.scss';

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <section className="filters__filter">
          <h2>Search</h2>
          <input className="text-input" type="text" placeholder="Todo name" />
        </section>
        <section className="filters__filter">
          <h2>Filter</h2>
          <div className="filters__status-group">
            <label className="filters__status-group-label radio-input">
              <input type="radio" name="filter"/>
              <span className="radio-input__check" />
              Show all
            </label>
            <label className="filters__status-group-label radio-input">
              <input type="radio" name="filter"/>
              <span className="radio-input__check" />
              Show completed
            </label>
            <label className="filters__status-group-label radio-input">
              <input type="radio" name="filter"/>
              <span className="radio-input__check" />
              Show active
            </label>
          </div>
        </section>
        <section className="filters__filter">
          <h2>Actions</h2>
          <button
            className="button"
            type="button"
            onClick={ this.props.removeCompleted }
          >Remove completed</button>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    removeCompleted: () => {
      return dispatch({
        type: 'REMOVE_COMPLETED'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
