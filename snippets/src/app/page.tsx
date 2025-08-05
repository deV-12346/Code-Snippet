import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

const page = async() => {
  const snippets = await prisma.snippet.findMany()
  return (
    <div className='h-auto w-full'>
      <h1 className='text-center text-3xl text-amber-600 font-mono'>Home</h1>
      <div className='flex justify-evenly items-center'>
         <h1 className='text-2xl font-medium '>Snippets</h1>
         <Link href={"/snippet/new"}>
         <Button>New</Button>
         </Link>
      </div>
      <div className='flex flex-col items-center w-ful'>
        {
          snippets.map((snippet)=>(
            
            <div key={snippet.id} className='border-1 rounded-2xl bg-gray-100  border-black flex justify-between items-center 
            py-2 px-3 w-full md:w-100 my-3'>
            <h1>{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}>
            <Button>View</Button>
            </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page