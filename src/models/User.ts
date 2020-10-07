import axios, { AxiosResponse } from 'axios';
import { Eventing } from '../Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  static fromData(data: UserProps): User {
    const user = new User(new Eventing());
    user.set(data);
    return user;
  }

  private data: UserProps = {};

  constructor(private events: Eventing) {}

  get(propName: string): any {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
    console.log('User.set()', this.data);
  }

  fetch(): void {
    axios
      .get(`http://localhost:8888/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        console.log('GET /users/:id', response);
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    console.log('User -> save -> id', id);

    if (id) {
      axios
        .put(`http://localhost:8888/users/${id}`, this.data)
        .then((res) => console.log('PUT /users/:id ', res));
    } else {
      axios
        .post('http://localhost:8888/users', this.data)
        .then((res) => console.log('POST /users', res));
    }
  }
}
