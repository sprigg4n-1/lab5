export interface User {
  username: string;
  email: string;
  password: string;
  address: string;
}

export class AdminCounter {
  private usernames: string[] = [];

  constructor(usernames: string[]) {
    this.usernames = usernames;
  }

  public countAdminUsers(): number {
    return this.usernames.filter((username) => username === `admin`).length;
  }
}

export class UserListProcessor {
  private usernames: string[] = [];

  constructor(usernames: string[]) {
    this.usernames = usernames;
  }

  public processUserList(): void {
    this.processUsers();
  }

  private processUsers(): void {
    this.usernames.forEach((username: string) => {
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

  public addUser(user: User): void {}

  public sendEmailToUser(user: User): void {}
}
