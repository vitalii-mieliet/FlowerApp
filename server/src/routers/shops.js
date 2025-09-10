import { Router } from 'express';
import { getShopsController } from '../controllers/shops.js';

const router = Router();

router.get('/', getShopsController);

export default router;
