export class Order {
  private _name: string;

  private _price: number;

  private _customerName: string;

  constructor(name: string, price: number, customerName: string) {
    this.name = name;
    this.price = price;
    this.customerName = customerName;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get customerName(): string {
    return this._customerName;
  }
  public set customerName(value: string) {
    this._customerName = value;
  }
}
