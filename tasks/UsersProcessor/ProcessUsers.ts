import { UserC } from './UserC';

export class ProcessUsers {
  private users: UserC[] = [];

  constructor(users: UserC[]) {
    this.users = users;
  }

  public processUserList(): void {
    this.processUsers();
  }

  private processUsers(): void {
    this.users.forEach(({ username }: UserC) => {
      this.processUser(username);
    });
  }

  private processUser(username: string): void {
    console.log(`Processing user: ${username}`);
    this.checkForAdmin(username);
  }

  private checkForAdmin(username: string): void {
    if (username === 'admin') {
      console.log(`Admin user detected!`);
    }
  }
}
