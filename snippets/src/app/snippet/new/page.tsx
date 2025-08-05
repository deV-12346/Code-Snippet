"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import React, {  useActionState } from 'react'
import * as actions from "@/actions"
const CreateNewSnippet = () => {
      const [formStateData,xyz] = useActionState(actions.createSnippet, {message:""});
  return (
    <div className='h-auto w-full'>
      <h1 className='text-center text-4xl font-mono'>New Code Snippet</h1>
      <div className='flex justify-evenly items-center my-2'>
        <form action={xyz}>
            <div className='flex items-center gap-3'>
            <Label className='text-2xl text-black font-mono hidden md:block'>
            Title</Label>
            <Input type="text" name="title" id='title' placeholder='Enter title' className='px-2 py-2 w-75 md:w-120 rounded 
            focus:scale-105 transition-all ease-in-out delay-500 duration-500
            focus:shadow-black focus:shadow-2xl placeholder:text-xl text-xl font-medium '
            />
            </div>

            <div className='flex items-start gap-3 my-3 '>
              <Label className='text-2xl text-black font-mono hidden md:block'>
                  Code
            </Label>
            <Textarea name="code" id='code' placeholder='Type Code here...'  cols={30} rows={40} 
            className='px-2 py-2 w-75 h-50 md:w-125 rounded 
            focus:scale-105  transition-all ease-in-out delay-500 duration-500
            focus:shadow-black focus:shadow-2xl placeholder:text-xl text-xl font-medium '
            />
            </div>
            <div>
              <h1 className='text-red-500 text-xl'>{formStateData.message}</h1>
            </div>
            <div className='flex justify-center items-center my-3 gap-4'>
            <Button type='submit'>New</Button>
            <Link href={"/"}>
            <Button>Back</Button>
            </Link>
            </div>
            
        </form>
      </div>
    </div>
  )
}

export default CreateNewSnippet