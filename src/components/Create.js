import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <Link to={"/note/new"}>
      Create New Note
    </Link>
  )
}

export default Create