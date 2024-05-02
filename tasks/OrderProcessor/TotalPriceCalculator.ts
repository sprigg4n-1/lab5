import { Order } from './Order';

export class TotalPriceCalculator {
  private orders: Order[] = [];

  public setOrders(orders: Order[]): void {
    this.orders = orders;
  }

  public calculateTotalPrice(): number {
    return this.orders.reduce((total, order) => total + order.price, 0);
  }
}
