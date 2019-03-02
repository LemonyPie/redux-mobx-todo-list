import React, { Component } from "react";
import './Filters.scss';

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <section>
          <h2>Search</h2>
        </section>
        <section>
          <h2>Filter</h2>
        </section>
        <section>
          <h2>Actions</h2>
        </section>
      </div>
    )
  }
}

export default Filters;
