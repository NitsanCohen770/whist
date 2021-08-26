import { ObjectId } from 'mongoose';

export interface Product {
  id?: string | number;
  title: string;
  description?: string;
  price: string | number;
  url: string;
}
