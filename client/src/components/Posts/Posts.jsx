import React from 'react'
import { useSelector } from 'react-redux'

import Post from './Post/Post'

const Posts = ({ setCurrentId }) => {
  const posts = useSelector(state => state.posts)
  console.log(posts)
  return (
    <div
        className='flex flex-col gap-3 border-2 border-slate-500 rounded-md px-4 py-2'
    >
        <h1
            className='text-3xl font-bold tracking-wider'
        >Posts</h1>

        {
            !posts.length ? 'No posts found...' : (
              <div
                className='flex gap-4 flex-wrap'
              >
                {
                  posts.map((post, index) => (
                      <div key={index}>
                          <Post post={post} setCurrentId={setCurrentId} />
                      </div>
                  ))
                }
              </div>
            )
        }
    </div>
  )
}

export default Posts