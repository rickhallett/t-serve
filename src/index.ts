import { User } from './models/User';

const user = new User({ name: 'MyUser', age: 28 });

const newUser = new User({});

newUser.set({ name: 'TestSubject' });

console.log(user.get('name'));
console.log(user.get('age'));
console.log(newUser.get('name'));
console.log(newUser.get('age'));

user.on('test', () => console.log('test'));
user.on('test', () => console.log('test'));
user.on('test', () => console.log('test'));

console.log(user);
