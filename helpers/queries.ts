import addDays from 'date-fns/addDays';
import OrderModel from '../models/Order';

export const getTopSalesForDay = (startDay: number, endDay: number) => {
  return OrderModel.aggregate([
    {
      $match: {
        date: {
          $gte: addDays(new Date(), endDay),
          $lte: addDays(new Date(), startDay),
        },
      },
    },
    {
      $group: {
        _id: null,
        totalValue: { $sum: '$totalOrderSum' },
      },
    },
  ]);
};

export const getMostUniqueProducts = () => {
  return OrderModel.aggregate([
    { $unwind: '$order' },
    { $sortByCount: '$order.product.title' },
    { $limit: 5 },
  ]);
};

export const getMostFrequentProducts = () => {
  return OrderModel.aggregate([
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
};
