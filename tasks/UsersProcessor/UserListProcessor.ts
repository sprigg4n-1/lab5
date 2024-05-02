import { User } from '../../types';
import { AdminCounter } from './AdminCounter';
import { ProcessUsers } from './ProcessUsers';
import { UserC } from './UserC';

export class UserListProcessor {
  private users: UserC[] = [];
  private _process: ProcessUsers;

  private adminCounter: AdminCounter;

  constructor(users: UserC[]) {
    this.users = users;
    this.process = new ProcessUsers(this.users);
    this.adminCounter = new AdminCounter();
  }

  public countAdminUsers(): number {
    return this.users.filter((user) => user.username === 'admin').length;
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

  public get process(): ProcessUsers {
    return this._process;
  }
  public set process(value: ProcessUsers) {
    this._process = value;
  }
}
