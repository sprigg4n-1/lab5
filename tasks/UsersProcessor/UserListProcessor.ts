import { AdminCounter } from './AdminCounter';
import { UserC } from './UserC';

export class UserListProcessor {
  private users: UserC[] = [];

  private adminCounter: AdminCounter;

  constructor(users: UserC[]) {
    this.users = users;
    this.adminCounter = new AdminCounter();
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
    if (this.checkForAdmin(username)) {
      console.log(`Admin user detected!`);
    } else {
      console.log(`Processing user: ${username}`);
    }
  }

  private checkForAdmin(username: string): boolean {
    return username === 'admin';
  }

  public countAdminUsers(): number {
    return this.adminCounter.amountAdminUsers(this.users);
  }

  public addUser(user: UserC): void {
    this.users.push(user);
    console.log(`User ${user.username} added!`);
  }

  public sendEmailToUser(user: UserC, email: string): void {
    console.log(`Sending email to ${user.email} \nEmail: ${email}`);
  }

  public getUsers(): UserC[] {
    return this.users;
  }
}
