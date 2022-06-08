import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
  return (
    <>
        <h3>404 NOT FOUND</h3>
        <button onClick={()=>navigate('/', {replace: true})}>Go back</button>
    </>
  )
}

export {Error};