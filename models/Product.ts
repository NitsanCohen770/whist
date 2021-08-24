import { Schema, model } from 'mongoose';
import { Product as ProductInterface } from '../shared/interface';

const schema = new Schema<ProductInterface>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  URL: { type: String, required: true },
});

const ProductModel = model<ProductInterface>('Product', schema);

export default ProductModel;
