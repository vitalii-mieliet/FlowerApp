import Order from '../db/models/order.js';

export const createOrder = async (payload) => {
  const data = await Order.create(payload);
  return data;
};
