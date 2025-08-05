import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import * as actions from "@/actions"
import { notFound } from 'next/navigation'


const SpecificSnippet = async({params}:{ params:{slug:string}}) => {
  const id = parseInt (params.slug)
  const snippet = await prisma.snippet.findUnique({
    where:{
      id
    }
  })
  if(!snippet) return notFound()
  const handleClick =  actions.deleteSnippet.bind(null,snippet.id)
    return (
    <div className='h-auto w-full flex justify-center items-center'>
      <div className='sm:w-80 md:w-120 '>
      <div className=' flex justify-between items-center'>
      <h1 className='text-2xl '>{snippet?.title}</h1>
      <div className='flex gap-4'>
        <Link href={`/snippet/${snippet?.id}/edit`}>
          <Button >Edit</Button>
        </Link>

       <form action={handleClick}>
        <Button type='submit'  variant={"destructive"}>Delete</Button>
       </form>
      
      </div>
      </div>
      <pre className='bg-gray-100 my-5 px-4 py-4 rounded'>
        <code>{snippet?.code}</code>
      </pre>
      <div className='text-center'>
        <Link href={"/"} >
      <Button>Back to Home</Button>
      </Link>
      </div>
      </div>
    </div>
  )
}

export default SpecificSnippet