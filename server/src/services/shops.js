import Shop from '../db/models/Shop.js';

export const getShops = async () => {
  const data = await Shop.find();
  return data;
};
