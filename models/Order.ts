import { Schema, model, models } from 'mongoose';
import { Order as OrderInterface, OrderItem } from '../shared/interface';

const orderItemSchema = new Schema<OrderItem>({
  product: { type: Object, require: true, ref: 'Product' },
  quantity: { type: Number, required: true },
});

const schema = new Schema<OrderInterface>({
  order: [orderItemSchema],
  date: { type: Date, required: true },
  totalOrderSum: { type: Number, required: true },
});

const OrderModel = models.Order || model<OrderInterface>('Order', schema);

export default OrderModel;
