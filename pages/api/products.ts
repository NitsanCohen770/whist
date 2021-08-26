import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
import ProductModel from '../../models/Product';

interface Data {
  success: boolean;
  data?: {} | {}[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body: id, method } = req;
  console.log(id);
  await dbConnect();
  switch (method) {
    case 'GET':
      try {
        const products = await ProductModel.find();
        console.log(products);
        if (!products) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT':
      try {
        const product = await ProductModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
          rawResult: true,
        });
        if (!product) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE':
      try {
        const deletedProduct = await ProductModel.deleteOne({ _id: id });
        const updatedProducts = await ProductModel.find();

        if (!deletedProduct) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: updatedProducts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
