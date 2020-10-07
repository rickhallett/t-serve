import { User } from './models/User';

const user = new User({ id: 1 });
user.fetch();

user.on('change', () => console.log('Event: user change'));
user.on('error', () => console.log('Event: user error'));

user.save();

console.log(user);
