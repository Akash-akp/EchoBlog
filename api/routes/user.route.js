import express from 'express'
import { followUser, test, unFollowUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test',test)
router.post('/followUser',followUser);
router.post('/unFollowUser',unFollowUser);

export default router; 