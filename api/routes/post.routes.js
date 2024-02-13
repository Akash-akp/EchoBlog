import express from 'express';
import { createPost , createComment , getPost , addLike ,removeLike, getPostById, getUserById, isLike, removeComment, deletePost } from '../controllers/post.controller.js';

const router = express.Router();
router.get('/getPost',getPost);
router.post('/createPost',createPost);
router.get('/getPostById',getPostById);
router.get('/getUserById',getUserById);
router.post('/createPost',createPost);
router.post('/createComment',createComment);
router.post('/addLike',addLike);
router.post('/isLike',isLike);
router.delete('/removeLike',removeLike);
router.delete('/removeComment',removeComment)
router.delete('/removePost',deletePost)



export default router;