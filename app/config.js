import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default {
    mongo: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT,
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        database: process.env.MONGO_DATABASE
    },
    server: {
        port: process.env.SERVER_PORT
    }
}