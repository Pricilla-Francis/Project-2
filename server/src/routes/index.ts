import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

// Register authentication routes
router.use('/auth', authRoutes);

// Register API routes with authentication middleware
router.use('/api', authenticateToken, apiRoutes);

export default router;
