import { Router } from 'express'
import { authCheck } from '../middleware/auth.check.js'
import { createPost, deletePost, getPosts, getSinglePost, updatePost } from './post.controller.js'

const router = Router()

/**
 * GET /api/post
 * @summary Get all posts
 * @tags posts
 * @return {array<object>} 200 - an array of posts
 */
router.get('/', getPosts)

/**
 * POST /api/post
 * @summary Create a post
 * @tags posts
 * @param {object} request.body.required - the post to create
 * @return {object} 201 - the created post
 * @security bearerAuth
 */
router.post('/', authCheck, createPost)

/**
 * GET /api/post/{id}
 * @summary Get a post by id
 * @tags posts
 * @param {string} id.path.required - the post id
 * @return {object} 200 - the post
 */
router.get('/:id', getSinglePost)

/**
 * PUT /api/post/{id}
 * @summary Update a post by id
 * @tags posts
 * @param {string} id.path.required - the post id
 * @param {object} request.body.required - the post to update
 * @return {object} 200 - the updated post
 * @security bearerAuth
 */
router.put('/:id', authCheck, updatePost)


/**
 * DELETE /api/post/{id}
 * @summary Delete a post by id
 * @tags posts
 * @param {string} id.path.required - the post id
 * @return {object} 200 - the deleted post
 * @security bearerAuth
 */
router.delete('/:id', authCheck, deletePost)


export {
    router as routeurPost
}