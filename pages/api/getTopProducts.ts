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
  const { method } = req;

  await dbConnect();
  switch (method) {
    case 'GET':
      try {
        const uniqueProducts = await OrderModel.aggregate([
          { $unwind: '$order' },
          { $sortByCount: '$order.product.title' },
          { $limit: 5 },
        ]);
        console.log(uniqueProducts);
        const frequentProducts = await OrderModel.aggregate([
          {
            $unwind: {
              path: '$order',
            },
          },
          {
            $group: {
              _id: '$order.product.title',
              total: { $sum: '$order.quantity' },
            },
          },
        ]).sort({ total: -1 });
        console.log(frequentProducts);
        if (!uniqueProducts) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
