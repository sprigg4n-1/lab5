export class OldUserListProcessor {
  private usernames: string[] = [];

  public UserListProcessor(usernames: string[]) {
    this.usernames = usernames;
  }

  public porcessUserList(): void {
    for (let i = 0; i < this.usernames.length; i++) {
      let username: string = this.usernames[i];
      console.log(`Processing user: ${username}`);

      if (username === 'admin') {
        console.log(`Admin user detected!`);
      }
    }
  }

  public countAdminUsers(): number {
    let count: number = 0;

    this.usernames.forEach((element) => {
      if (element === 'admin') {
        count++;
      }
    });

    return count;
  }

  public addUser(
    username: string,
    email: string,
    password: string,
    address: string
  ): void {}

  public sendEmailToUser(username: string, email: string): void {}
}
