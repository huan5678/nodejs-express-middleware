const postController = require('../controllers/post');
const express = require('express');
const router = express.Router();

router.get('/posts', postController.getAllPosts);

router.get('/post/:id', postController.getPostByID);

router.post('/post', postController.createPost);

router.delete('/posts', postController.deleteAllPost);

router.delete('/post/:id', postController.deletePost);

router.patch('/post/:id', postController.updatePost);


module.exports = router;
