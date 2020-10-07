import { User } from './models/User';

const user = User.fromData({ name: 'Simon', age: 41, id: 1 });

user.fetch();
user.set({ name: 'update', age: 99 });
user.save();

console.log(user);
