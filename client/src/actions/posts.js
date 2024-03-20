import { FETCH_ALL, CREATE, UPDATE, LIKE, DELETE } from '../constants/posts.js'
import * as api from '../api'

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        const action = {
            type: FETCH_ALL,
            payload: data
        }
        dispatch(action)
    } catch (err) {
        console.log(err.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        const action = {
            type: CREATE,
            payload: data
        }
        dispatch(action)
    } catch (err) {
        console.log(err.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        const action = {
            type: UPDATE,
            payload: data
        }
        dispatch(action)
    } catch (err) {
        console.log(err.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        const action = {
            type: DELETE,
            payload: id
        }
        dispatch(action)
    } catch (err) {
        console.log(err.message)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        const action = {
            type: LIKE,
            payload: data
        }
        dispatch(action)
    } catch (err) {
        console.log(err.message)
    }
}