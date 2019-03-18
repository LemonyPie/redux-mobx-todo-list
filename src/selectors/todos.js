import { createSelector } from 'reselect';

const getTodos = state => state.todos;

const getVisibilityFilter = state => state.visibilityFilter;

const getVisibleTodos = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, visibilityFilter) => {

    const { status, searchText } = visibilityFilter;

    const filterByStatus = (todo) => {
      switch(status){
        case 'ACTIVE':
          return !todo.completed;
        case 'COMPLETED':
          return todo.completed;
        default:
          return true;
      }
    };

    return todos
      .filter( filterByStatus )
      .filter( todo => todo.name.toLowerCase().includes(searchText.toLocaleLowerCase()) )
      .sort( (a, b) => a.completed - b.completed)
  }
);

export default getVisibleTodos;

