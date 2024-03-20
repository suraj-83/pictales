import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { deletePost, likePost } from '../../../actions/posts.js'

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()

  return (
    <div
        className='border-2 border-slate-800 rounded-md px-1 py-2 w-96'
    >
      
      <div
        className='relative'
      >
        <div className='rounded-xl overflow-hidden pt-16'>
          <img src={post.selectedFile} alt='Image' />
        </div>
        <div className='px-3 py-2 flex justify-between absolute top-0 w-full text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg'>
          <div>
          <h1 className='text-xl font-bold font-sans'>{post.creator}</h1>
          <h1 className='text-md font-bold'>{post.title}</h1>
            
          </div>
          <div className='text-md'>
            {moment(post.createdAt).startOf('hour').fromNow()}
          </div>
        </div>
      </div>

      <div
        className='flex flex-col gap-2 mt-4 px-2'
      >
        <div
          className='text-gray-400'
        >
          {
            post.tags.map((tag, key) => (
              <span key={key}>#{tag} </span>
            ))
          }
        </div>
        
        <div
          className='text-xl'
        >{post.message}</div>
        
        <div
          className='mt-4 flex justify-around'
        >
          <button
            className='rounded-md bg-blue-500 hover:bg-blue-300 px-4 py-1 text-white font-semibold'
            onClick={() => dispatch(likePost(post._id))}
          >Like {post.likeCount}</button>
          <button
            className='rounded-md bg-red-500 hover:bg-red-300 px-4 py-1 text-white font-semibold'
            onClick={() => dispatch(deletePost(post._id))}
          >Delete</button>
          <button
            className='rounded-md bg-green-500 hover:bg-green-300 px-4 py-1 text-white font-semibold'
            onClick={() => setCurrentId(post._id)}
          >Edit</button>
        </div>
      </div>

    </div>
  )
}

export default Post