import { User } from './user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config.js'

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (await (bcrypt.compare(password, user.password))) {
            let token = jwt.sign({ userID: user.id }, config.secret, { expiresIn : '1h' })
            res.status(200).json({ token })
        } else {
            res.status(401).json({ message: 'Invalid credentials' })
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


export const register = async (req, res) => {
    try {
        let { username, password } = req.body
        const hash = await bcrypt.hash(password, 10)
        password = hash
        await User.create({ username, password })
        res.status(201).json({ message: 'User created' })
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message})
    }
}