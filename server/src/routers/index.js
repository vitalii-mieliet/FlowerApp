import { Router } from 'express';
import productsRouter from './products.js';
import shopsRouter from './shops.js';
import ordersRouter from './orders.js';

const router = Router();

router.use('/products', productsRouter);
router.use('/shops', shopsRouter);
router.use('/orders', ordersRouter);

export default router;
