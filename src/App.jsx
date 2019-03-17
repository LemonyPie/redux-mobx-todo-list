import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import store from './stores/todos';
import Filters from './components/Filters';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
            <h1>Todo list</h1>
        </header>
        <Provider store={ store }>
          <main className="main">
            <Filters />
            <div>
              <AddTodo />
              <TodoList />
            </div>
          </main>
        </Provider>
      </div>
    );
  }
}

export default App;
