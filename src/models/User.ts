import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): any {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
    console.log('User.set()', this.data);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((cb: Callback) => cb());
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
