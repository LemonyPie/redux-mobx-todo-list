import { observable, action } from 'mobx';

class TodoStore {
  @observable
  todos = [{name: 'Make dinner'}];
}

export default new TodoStore();
