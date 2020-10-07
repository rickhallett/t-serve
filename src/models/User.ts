import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): any {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
    console.log('User.set()', this.data);
  }

  
}
