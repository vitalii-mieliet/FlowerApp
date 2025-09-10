import { getShops } from '../services/shops.js';

export const getShopsController = async (req, res) => {
  const data = await getShops();

  res.status(200).json({
    status: 200,
    message: 'Successfully found shops!',
    data,
  });
};
