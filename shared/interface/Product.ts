import { ObjectId } from 'mongoose';

export interface Product {
  _id?: string;
  title: string;
  description?: string;
  price: number;
  url: string;
}
