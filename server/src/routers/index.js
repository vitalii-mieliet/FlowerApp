import { Router } from 'express';
import productsRouter from './products.js';
import shopsRouter from './shops.js';
const router = Router();

router.use('/products', productsRouter);
router.use('/shops', shopsRouter);

export default router;
