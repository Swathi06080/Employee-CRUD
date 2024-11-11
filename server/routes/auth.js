import express from 'express';
import { login,verify } from '../controllers/authController.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/login',login)

router.route('/api/auth/verify').get(authMiddleware, verify);

export default router;