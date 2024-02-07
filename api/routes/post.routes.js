import express from 'express';
import { createPost , createComment , getPost , addLike ,removeLike, getPostById } from '../controllers/post.controller.js';

const router = express.Router();
router.get('/getPost',getPost);
router.post('/createPost',createPost);
router.get('/getPostById',getPostById);
router.post('/createPost',createPost);
router.post('/createComment',createComment);
router.post('/addLike',addLike);
router.delete('/removeLike',removeLike);



export default router;