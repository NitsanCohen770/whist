import type { NextApiRequest, NextApiResponse } from 'next';
import addDays from 'date-fns/addDays';
import dbConnect from '../../lib/dbConnect';
import OrderModel from '../../models/Order';

type Data = {
  data?: {};
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
          { $limit: 5 },
        ]).sort({ total: -1 });

        const fiveDaysSales = await Promise.allSettled([
          OrderModel.aggregate([
            {
              $match: {
                date: {
                  $gte: addDays(new Date(), -1),
                  $lte: new Date(),
                },
              },
            },
            {
              $group: {
                _id: null,
                totalValue: { $sum: '$totalOrderSum' },
              },
            },
          ]),
          OrderModel.aggregate([
            {
              $match: {
                date: {
                  $gte: addDays(new Date(), -2),
                  $lte: addDays(new Date(), -1),
                },
              },
            },
            {
              $group: {
                _id: null,
                totalValue: { $sum: '$totalOrderSum' },
              },
            },
          ]),
          OrderModel.aggregate([
            {
              $match: {
                date: {
                  $gte: addDays(new Date(), -3),
                  $lte: addDays(new Date(), -2),
                },
              },
            },
            {
              $group: {
                _id: null,
                totalValue: { $sum: '$totalOrderSum' },
              },
            },
          ]),
          OrderModel.aggregate([
            {
              $match: {
                date: {
                  $gte: addDays(new Date(), -4),
                  $lte: addDays(new Date(), -5),
                },
              },
            },
            {
              $group: {
                _id: null,
                totalValue: { $sum: '$totalOrderSum' },
              },
            },
          ]),
          OrderModel.aggregate([
            {
              $match: {
                date: {
                  $gte: addDays(new Date(), -5),
                  $lte: addDays(new Date(), -4),
                },
              },
            },
            {
              $group: {
                _id: null,
                totalValue: { $sum: '$totalOrderSum' },
              },
            },
          ]),
        ]);
        console.log(fiveDaysSales);
        if (!uniqueProducts) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({
          success: true,
          data: { uniqueProducts, frequentProducts, fiveDaysSales },
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
