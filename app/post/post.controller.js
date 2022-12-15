import { Post } from './post.model.js'

const getPosts = async (req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
}

const createPost = async (req, res) => {
    const { title, content } = req.body
    const post = new Post({ title, content })
    const postSaved = await post.save()
    res.status(201).json(postSaved)
}

export {
    getPosts,
    createPost
}