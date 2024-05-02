import { UserC } from './UserC';

export class AdminCounter {
  public amountAdminUsers(users: UserC[]): number {
    return users.filter((user) => user.username === 'admin').length;
  }
}
