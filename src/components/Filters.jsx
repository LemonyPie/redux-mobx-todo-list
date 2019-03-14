import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  REMOVE_COMPLETED,
  SET_SEARCH_TEXT_FILTER, SET_STATUS_FILTER_SHOW_ACTIVE,
  SET_STATUS_FILTER_SHOW_ALL,
  SET_STATUS_FILTER_SHOW_COMPLETED
} from "../actions/types";
import './Filters.scss';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: props.searchText,
      status: props.status
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      searchText: nextProps.searchText,
      status: nextProps.status
    } );
  }

  render() {
    return (
      <form className="filters">
        <fieldset className="filters__filter">
          <legend>Search</legend>
          <input
            className="text-input"
            type="text"
            placeholder="Todo name"
            value={ this.state.searchText }
            onChange={ this.props.updateTextSearchFilter }
          />
        </fieldset>
        <fieldset className="filters__filter">
          <legend>Filter</legend>
          <div className="filters__status-group">
            <label className="filters__status-group-label radio-input">
              <input
                type="radio"
                name="filter"
                onChange={ () => this.props.updateStatusFilter(SET_STATUS_FILTER_SHOW_ALL) }
                checked={ this.state.status === 'ALL' }
                value="ALL"/>
              <span className="radio-input__check" />
              Show all
            </label>
            <label className="filters__status-group-label radio-input">
              <input
                type="radio"
                name="filter"
                onChange={ () => this.props.updateStatusFilter(SET_STATUS_FILTER_SHOW_COMPLETED) }
                checked={ this.state.status === 'COMPLETED' }
                value="COMPLETED"/>
              <span className="radio-input__check" />
              Show completed
            </label>
            <label className="filters__status-group-label radio-input">
              <input
                type="radio"
                name="filter"
                onChange={ () => this.props.updateStatusFilter(SET_STATUS_FILTER_SHOW_ACTIVE) }
                checked={ this.state.status === 'ACTIVE' }
                value="ACTIVE"/>
              <span className="radio-input__check" />
              Show active
            </label>
          </div>
        </fieldset>
        <fieldset className="filters__filter">
          <legend>Actions</legend>
          <button
            className="button"
            type="button"
            onClick={ this.props.removeCompleted }
          >Remove completed</button>
        </fieldset>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    status: state.visibilityFilter.status,
    searchText: state.visibilityFilter.searchText
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCompleted: () => {
      return dispatch({
        type: REMOVE_COMPLETED
      })
    },
    updateTextSearchFilter: e => {
      const searchText = e.target.value;
      return dispatch({
        type: SET_SEARCH_TEXT_FILTER,
        searchText
      })
    },
    updateStatusFilter: actionType => {
      return dispatch({
        type: actionType
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
