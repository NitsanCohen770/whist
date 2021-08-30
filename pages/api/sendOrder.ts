import type { NextApiRequest, NextApiResponse } from 'next';
import { Order } from '../../shared/interface';
import dbConnect from '../../lib/dbConnect';
import OrderModel from '../../models/Order';

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    body: { order, date },
    method,
  } = req;

  await dbConnect();
  switch (method) {
    case 'POST':
      try {
        console.log(date);
        const newOrder = await OrderModel.create({ order, date });

        if (!newOrder) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
