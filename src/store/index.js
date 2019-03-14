import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from '../reducers';

const initialState = {
  todos: [
    {
      id: 'f8bd95636db255ff54ef2f991c427d3382487cd1',
      name: 'Make a sandwich',
      completed: false
    },
    {
      id: '6551f598c2d2ec3f63e74417636b2870998dd93a',
      name: 'Buy milk',
      completed: true
    }
  ],
  visibilityFilter: {
    searchText: '',
    status: 'ALL'
  }
};

export default createStore(reducer, initialState, devToolsEnhancer())
