import { User } from './models/User';

const user = new User({ id: 1, name: 'From Code', age: 1 });
user.fetch();

user.on('change', () => console.log('Event: user change'));
user.on('error', () => console.log('Event: user error'));
user.on('db:update', () => {
  console.log('Event user db:update');
  console.log(user);
});

user.set({ id: 1, name: 'From Code', age: 2 });

user.save();
