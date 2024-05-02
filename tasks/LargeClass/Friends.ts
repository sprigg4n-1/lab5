export class Friends {
  private friends: string[] = [];
  public addFriend(friend: string): void {
    this.friends.push(friend);
  }

  public removeFriend(friend: string): void {
    this.friends.splice(this.friends.indexOf(friend), 1);
  }

  public displayInfo(): void {
    console.log(`Friends: ${this.friends}`);
  }
}
