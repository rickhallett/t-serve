import { User } from './models/User';

const user = new User({ id: 1 });

user.fetch();
user.set({ name: 'Test1', age: 29 });
user.save();

const user2 = new User({ name: 'From Code', age: 0 });
user2.save();

const user3 = new User({ name: 'From Code2', age: 1 });
user3.save();

console.log(user);
