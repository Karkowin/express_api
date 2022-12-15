import { model, Schema } from 'mongoose'

const PostSchema = new Schema({
    title: { type: String},
    content: { type: String}
}, { timestamps: true })

export const Post = model('Post', PostSchema)