import Product from '../db/models/Product.js';

export const getProducts = async () => {
  const data = await Product.find();
  return data;
};
