import { User } from './models/User';

const user = new User({ name: 'Simon', age: 41, id: 1 });

user.attributes.set({ name: 'update', age: 49 });
user.sync.save()

console.log(user);
