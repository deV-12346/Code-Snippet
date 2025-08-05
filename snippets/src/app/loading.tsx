"use server"
// import Loader from '@/components/Loader'
// import React from 'react'

const Loading = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      {/* <Loader/> */}
      <h1 className="text-red-700 text-3xl">Loading...</h1>
    </div>
  )
}

export default Loading