import { Router } from 'express'
import { login, register } from './user.controller.js'

const router = Router()

/**
 * POST /api/user/login
 * @summary Login
 * @tags user
 * @param {string} username.body.required - the username
 * @param {string} password.body.required - the password
 * @return {object} 200 - the token
*/
router.post('/login', login)

/**
 * POST /api/user/register
 * @summary Register
 * @tags user
 * @param {string} username.body.required - the username
 * @param {string} password.body.required - the password
 * @return {object} 201 - the user created
*/
router.post('/register', register)

export {
    router as routeurUser
}