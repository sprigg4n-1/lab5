import { Order } from './Order';
import { TotalPriceCalculator } from './TotalPriceCalculator';

// order
export class OrderProcessor {
  private orders: Order[];
  private totalPriceCalculator: TotalPriceCalculator;

  constructor(orders: Order[]) {
    this.orders = orders;
    this.totalPriceCalculator = new TotalPriceCalculator();
  }

  public processOrder(): void {
    this.orders.forEach((order) => {
      console.log(`Order: ${order.name}, price: ${order.price}`);
      console.log(`Customer: ${order.customerName}`);
    });
  }

  public makeOrder(order: Order): void {
    this.orders.push(order);
    console.log(`Your order ${order.name}.`);
  }

  public giveTotalPrice(): void {
    this.totalPriceCalculator.setOrders(this.orders);
    console.log(this.totalPriceCalculator.calculateTotalPrice());
  }
}
