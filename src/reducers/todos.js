import { ADD_TODO, REMOVE_TODO, REMOVE_COMPLETED, TOGGLE_TODO_STATUS } from '../actions/types';

const todo = ( state = {}, action ) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        name: action.name,
        completed: false
      };
    case TOGGLE_TODO_STATUS:
      if( state.id !== action.id ) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

export default ( state = [], action ) => {
  switch ( action.type ) {
    case ADD_TODO:
      return [
        ...state,
        todo( undefined, action)
      ];
    case REMOVE_TODO:
      return state.filter( todo => todo.id !== action.id );
    case REMOVE_COMPLETED:
      return state.filter( todo => !todo.completed );
    case TOGGLE_TODO_STATUS:
      return state.map( todoItem => todo(todoItem, action) );
    default:
      return state;
  }
}
