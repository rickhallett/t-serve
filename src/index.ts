import { User } from './models/User';

const user = new User({ name: 'Simon', age: 41, id: 1 });

user.fetch();
user.set({ name: 'update', age: 49 });
user.save();

console.log(user);
