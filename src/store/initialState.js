import faker from 'faker';
import crypto from 'crypto';

const todos = [];

for(let i = 0; i < 10; i++){
  todos.push({
    id: crypto.randomBytes(20).toString('hex'),
    name: faker.lorem.sentence(),
    completed: faker.random.boolean()
  })
}

const state = {
  todos: todos,
  visibilityFilter: {
    searchText: '',
    status: 'ALL'
  }
};

export default state;
