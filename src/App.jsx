import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Filters from './components/Filters';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="header">
              <h1>Todo list</h1>
          </header>
          <main className="main">
            <Filters />
            <div>
              <AddTodo />
              <TodoList />
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
