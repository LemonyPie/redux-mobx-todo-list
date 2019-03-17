import {action, computed, observable} from 'mobx';
import crypto from 'crypto';

class Todo {
  @observable name;
  @observable completed;
  id;

  constructor(name){
    this.name = name;
    this.id = crypto.randomBytes(20).toString('hex');
    this.completed = false;
  }
}

class TodoStore {
  @observable
  todos = [
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
  ];

  @computed
  get visibleTodos(){
    const visibleTodosRegexp = new RegExp(this.visibilityFilter.textSearch, "i");
    let visibleTodos = this.todos.filter(
      todo => visibleTodosRegexp.test(todo.name)
    );

    switch(this.visibilityFilter.state){
      case 'ACTIVE':
        return visibleTodos.filter( todo => !todo.completed);
      case 'COMPLETED':
        return visibleTodos.filter( todo => todo.completed);
      default:
        return visibleTodos;
    }
  }

  @action
  addNewTodo(name){
    this.todos.push( new Todo(name) );
  }

  @action
  toggleTodoStatus(id){
    this.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })
  }

  @action
  removeCompleted(){
    this.todos = this.todos.filter( todo => !todo.completed)
  }

  @observable
  visibilityFilter = {
    textSearch: '',
    state: 'ALL'
  };

  @action
  setTextFilter(text){
    this.visibilityFilter.textSearch = text;
  }

  @action
  setStatusFilter(state){
    this.visibilityFilter.state = state;
  }
}

let store = new TodoStore();

export default store;
