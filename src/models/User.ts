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
    return (
      this.data[propName] ||
      new Error(
        `propName: ${propName} does not exist on User data: ${this.data}`
      )
    );
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
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
        this.set(response.data);
      });
  }
}
