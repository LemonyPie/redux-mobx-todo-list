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

  @observable
  visibilityFilter = {
    textSearch: '',
    state: 'ALL'
  };

  @computed
  get visibleTodos(){
    return this.todos.filter(
      todo => new RegExp(this.visibilityFilter.textSearch, "i").test(todo.name)
    )
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
}
let store = new TodoStore();

export default store;
