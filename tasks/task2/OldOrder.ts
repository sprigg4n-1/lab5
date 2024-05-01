export class OldOrder {
  private customerName: string;
  private items: string[];
  private totalPrice: number;

  constructor(customerName: string, items: string[]) {
    this.customerName = customerName;
    this.items = items;
    this.totalPrice = this.calculateTotalPrice();
  }

  public processOrder(): void {}

  private calculateTotalPrice(): number {
    let price: number = 0;

    this.items.forEach((element) => {});

    return price;
  }
}

export class OldLargeClass {
  private name: string;
  private age: number;
  private gender: string;
  private friends: string[];
  private enemies: string[];
  private tasks: string[];

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.friends = [];
    this.enemies = [];
    this.tasks = [];
  }

  public addFriend(friend: string): void {
    this.friends.push(friend);
  }

  public removeFriend(friend: string): void {
    this.friends.splice(this.friends.indexOf(friend), 1);
  }

  public addEnemy(enemy: string): void {
    this.enemies.push(enemy);
  }

  public removeEnemy(enemy: string): void {
    this.enemies.splice(this.enemies.indexOf(enemy), 1);
  }

  public addTask(task: string): void {
    this.tasks.push(task);
  }

  public removeTask(task: string): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  public displayInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Friends: ${this.friends}`);
    console.log(`Enemies: ${this.enemies}`);
    console.log(`Tasks: ${this.tasks}`);
  }
}
