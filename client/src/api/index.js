import axios from 'axios'

const serverURL = 'http://localhost:8000/posts'

export const fetchPosts = () => axios.get(serverURL)
export const createPost = (newPost) => axios.post(serverURL, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${serverURL}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${serverURL}/${id}`)
export const likePost = (id) => axios.patch(`${serverURL}/${id}/likePost`)