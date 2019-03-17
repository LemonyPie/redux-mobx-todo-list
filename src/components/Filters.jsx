import React, { Component } from "react";
import './Filters.scss';
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class Filters extends Component {
  handleRemoveCompleted = () => {
    this.props.store.removeCompleted();
  };

  handleStatusFilterChange = state => {
    this.props.store.setStatusFilter(state);
  };

  handleTextFilterChange = text => {
    this.props.store.setTextFilter(text)
  };

  render() {
    const { textSearch, state } = this.props.store.visibilityFilter;

    return (
      <form
        className="filters"
        onSubmit={ e => {
          e.preventDefault();
          this.handleTextFilterChange('')
        }}
      >
        <fieldset className="filters__filter">
          <legend>Search</legend>
          <input
            className="text-input"
            type="text"
            placeholder="Todo name"
            value={ textSearch }
            onChange={ (e) => this.handleTextFilterChange(e.target.value) }
          />
        </fieldset>
        <fieldset className="filters__filter">
          <legend>Filter</legend>
          <div className="filters__status-group">
            <label className="filters__status-group-label radio-input">
              <input
                type="radio"
                name="filter"
                onChange={ () => this.handleStatusFilterChange('ALL') }
                checked={ state === 'ALL' }
              />
              <span className="radio-input__check" />
              Show all
            </label>
            <label className="filters__status-group-label radio-input">
              <input
                type="radio"
                name="filter"
                onChange={ () => this.handleStatusFilterChange('COMPLETED') }
                checked={ state === 'COMPLETED' }
              />
              <span className="radio-input__check" />
              Show completed
            </label>
            <label className="filters__status-group-label radio-input">
              <input
                type="radio"
                name="filter"
                onChange={ () => this.handleStatusFilterChange('ACTIVE') }
                checked={ state === 'ACTIVE' }
              />
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
            onClick={ this.handleRemoveCompleted }
          >Remove completed</button>
        </fieldset>
      </form>
    )
  }
}

export default Filters;
