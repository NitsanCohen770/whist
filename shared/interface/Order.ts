import { Product } from './Product';

export interface OrderItem extends Product {
  quantity: number;
}

export interface Order {
  order: OrderItem[];
}
