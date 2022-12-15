import jwt from 'jsonwebtoken'
import config from '../config.js'

export const authCheck = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, config.secret)
        req.userData = decoded
        next()
    } catch (error) {
        return res.status(409).json({
            message: 'Auth failed'
        })
    }
}