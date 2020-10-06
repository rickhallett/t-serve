interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
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
}
