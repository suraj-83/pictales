import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages)
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)

    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (err) {
        res.status(409).json({
            message: err.message
        })
    }
}

export const deletePost = async (req, res) => {
    // const post = req.body;

    // try {
    //     const post = await PostMessage.findById(post.id);
    //     if (!post) return res.status(404).json({ message: "Post not found" });

    //     await post.remove();
    //     res.status(200).json({ message: "Post deleted successfully" });
    // } catch (err) {
    //     res.status(500).json({ message: err.message });
    // }

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("Invalid post")

    await PostMessage.findByIdAndDelete(id)

    res.status(200).json({
        message: "Post deleted successfully"
    })
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("Invalid post")

    const updatedPost = await PostMessage.findOneAndUpdate({ _id: _id }, post, { new: true })

    res.json(updatedPost)
}

export const likePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("Invalid post")

    const oldPost = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: oldPost.likeCount + 1 }, { new: true })

    res.json(updatedPost)
}