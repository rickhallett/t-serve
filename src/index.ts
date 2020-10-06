import { User } from './models/User';

const user = new User({ name: 'MyUser', age: 28 });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => console.log('Change #1'));
user.on('change', () => console.log('Change #2'));
user.on('save', () => console.log('Saved'));

console.log(user);

user.trigger('change');
user.trigger('save');
user.trigger('doesntExist');
