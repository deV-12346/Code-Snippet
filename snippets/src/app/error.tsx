"use client"
import React from 'react'
type ErrorPage={
      error:Error
}
const Error = ({error}:ErrorPage) => {
  return (
    <div>
        {error.message}
    </div>
  )
}

export default Error