export interface IOrder {
  name: string;
  price: number;
  customerName: string;
}

// order
export class OrderProcessor {
  private order: IOrder;

  constructor(order: IOrder) {
    this.order = order;
  }

  public processOrder(): void {
    console.log(`Order: ${this.order.name}, price: ${this.order.price}`);
    console.log(`Customer: ${this.order.customerName}`);
  }
}

export class TotalPriceCalculator {
  private orders: IOrder[] = [];

  constructor(orders: IOrder[]) {
    this.orders = orders;
  }

  public calculateTotalPrice(): number {
    return this.orders.reduce((total, order) => total + order.price, 0);
  }
}

// large class
export class PersonalInformation {
  private name: string;
  private age: number;
  private gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public displayInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
  }
}

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

export class Enemies {
  private enemies: string[] = [];
  public addEnemy(enemy: string): void {
    this.enemies.push(enemy);
  }

  public removeEnemy(enemy: string): void {
    this.enemies.splice(this.enemies.indexOf(enemy), 1);
  }

  public displayInfo(): void {
    console.log(`Friends: ${this.enemies}`);
  }
}

export class Tasks {
  private tasks: string[] = [];
  public addTask(task: string): void {
    this.tasks.push(task);
  }

  public removeTask(task: string): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  public displayInfo(): void {
    console.log(`Friends: ${this.tasks}`);
  }
}
