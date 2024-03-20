import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Posts from "../Posts/Posts"
import Form from "../Form/Form"

import { getPosts } from '../../actions/posts.js'

const Home = () => {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div
        className="grid grid-cols-1 lg:grid-cols-2  gap-2 py-4"
    >
        <Posts setCurrentId={setCurrentId} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  )
}

export default Home