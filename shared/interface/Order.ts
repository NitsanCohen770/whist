import { Product } from './Product';

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Order {
  order: OrderItem[];
}
