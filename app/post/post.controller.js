import { Post } from './post.model.js'

const getAll = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOne = async (req, res) => {
    const { id } = req.params
    try {
        const post = await Post.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json(error)
    }
}

const create = async (req, res) => {
    const data = req.body
    try {
        const post = await Post.create(data)
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json(error)
    }
}

const update = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        const post = await Post.findByIdAndUpdate(id , data, { new : true })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json(error)
    }
}

const remove = async (req, res) => {
    const { id } = req.params
    try {
        const post = await Post.findByIdAndDelete(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json(error)
    }
}

export {
    getAll as getPosts,
    getOne as getSinglePost,
    create as createPost,
    update as updatePost,
    remove as deletePost
}