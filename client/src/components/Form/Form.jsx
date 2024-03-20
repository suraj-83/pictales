import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import { createPost, updatePost } from '../../actions/posts.js'

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })

    const post = useSelector(state => currentId ? state.posts.find((p) => p._id === currentId) : null)
    useEffect(() => {
        if (post)
            setPostData(post)
    }, [post])

    const dispatch = useDispatch()

    const ignoreStrings = ['createdAt', 'likeCount', '__v', '_id']

    const handleSubmit = () => {
        for (let data in postData) {
            if (!postData[data] && !ignoreStrings.includes(data)) return alert(`Please fill ${data}`)
        }

        if (currentId) {
            dispatch(updatePost(currentId, postData))
            resetForm()
        } else {
            dispatch(createPost(postData))
            resetForm()
        }
    }

    const resetForm = () => {
        setCurrentId(null)
        setPostData({
            creator: '', title: '', message: '', tags: '', selectedFile: ''
        })
    }

    return (
        <div
            className='flex justify-end'
        >
            <form
                onSubmit={e => e.preventDefault()}
                className='flex flex-col items-center fit-content gap-3 text-xl border-2 border-primary px-8 py-6 rounded-lg bg-gradient-to-r from-violet-100 to-fuchsia-100'
            >
                <h3
                    className='font-bold text-3xl'
                >
                    {
                        currentId ? 'Edit your Tale' : 'Create a Tale'
                    }
                </h3>
                <input 
                    type='text'
                    placeholder='Creator'
                    className='w-full outline-none px-2 py-1 rounded-md border-2 border-gray-400 transition-all hover:border-green-500 focus:border-green-500'
                    value={postData.creator}
                    onChange={e => setPostData({ ...postData, creator: e.target.value })}
                />
                <input 
                    type='text'
                    placeholder='Title'
                    className='w-full outline-none px-2 py-1 rounded-md border-2 border-gray-400 transition-all hover:border-green-500 focus:border-green-500'
                    value={postData.title}
                    onChange={e => setPostData({ ...postData, title: e.target.value })}
                />
                <input 
                    type='text'
                    placeholder='Message'
                    className='w-full outline-none px-2 py-1 rounded-md border-2 border-gray-400 transition-all hover:border-green-500 focus:border-green-500'
                    value={postData.message}
                    onChange={e => setPostData({ ...postData, message: e.target.value })}
                />
                <input 
                    type='text'
                    placeholder='Tags'
                    className='w-full outline-none px-2 py-1 rounded-md border-2 border-gray-400 transition-all hover:border-green-500 focus:border-green-500'
                    value={postData.tags}
                    onChange={e => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />

                <div
                    className='w-fit text-md'
                >
                    <FileBase 
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>

                <div
                    className='w-full flex flex-col justify-center gap-4'
                >
                    <button
                        onClick={handleSubmit}
                        className='bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-all hover:bg-green-500 focus:bg-green-500'
                    >Submit</button>
                    
                    <button
                        onClick={resetForm}
                        className='bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-all hover:bg-red-500 focus:bg-red-500'
                    >Reset</button>
                </div>

            </form>
        </div>
    )
}

export default Form