import type { NextApiRequest, NextApiResponse } from 'next';
import addDays from 'date-fns/addDays';
import dbConnect from '../../lib/dbConnect';
import OrderModel from '../../models/Order';
import {
  getTopSalesForDay,
  getMostUniqueProducts,
  getMostFrequentProducts,
} from '../../helpers/queries';

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
        const uniqueProducts = await getMostUniqueProducts();
        const frequentProducts = await getMostFrequentProducts();
        const fiveDaysSales = await Promise.allSettled([
          getTopSalesForDay(0, -1),
          getTopSalesForDay(-1, -2),
          getTopSalesForDay(-2, -3),
          getTopSalesForDay(-3, -4),
          getTopSalesForDay(-4, -5),
        ]);

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
