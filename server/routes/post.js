import express from 'express'
import { body } from 'express-validator'
import { createPost, deletePost, getPosts, updatePost, getPostById } from '../controllers/post.js'

const router = express.Router()

router.get('/', getPosts)
router.get('/:postId', getPostById)
router.post('/create',
    [
        body('title').isLength({min: 5}).withMessage('minimum length is 5 characters'), 
        body('content').isLength({min: 5}).withMessage('minimum length is 5 characters')
    ],  createPost)
router.put('/:postId/',
    [
        body('title').isLength({min: 5}).withMessage('minimum length is 5 characters'), 
        body('content').isLength({min: 5}).withMessage('minimum length is 5 characters')
    ], updatePost)
router.delete('/:postId/', deletePost)

export  { router }