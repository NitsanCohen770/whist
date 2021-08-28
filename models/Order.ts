import { Schema, model, models } from 'mongoose';
import { Order as OrderInterface, OrderItem } from '../shared/interface';

const orderItemSchema = new Schema<OrderItem>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  URL: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const schema = new Schema<OrderInterface>({
  order: [orderItemSchema],
});

const OrderModel = models.Order || model<OrderInterface>('Order', schema);

export default OrderModel;
