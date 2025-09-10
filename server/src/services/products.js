import Product from '../db/models/Product.js';

export const getProducts = async (shopId) => {
  const data = await Product.find({ shopId });
  return data;
};
