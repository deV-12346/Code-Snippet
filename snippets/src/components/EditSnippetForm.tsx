"use client"
import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import { Button } from './ui/button';
import { saveSnippet } from '@/actions';
const EditSnippetForm = ({snippet}:{snippet:Snippet}) => {
const [code,setCode] = useState(snippet.code)
   const saveEditedSnippet = saveSnippet.bind(null,snippet.id,code)
   const handleChangeCode = (value:string) =>{
      setCode(value)
   }
  return (
    <div className='w-full h-auto flex justify-center items-center'>
      <div className='w-80 md:w-140 h-auto'>
      <h1 className='text-2xl my-2 font-mono text-center'>Edit your code</h1>
      <form action={saveEditedSnippet}>
      <Editor height="40vh" 
      theme='vs-dark'
      defaultLanguage="javascript" 
      defaultValue={code}
      onChange={handleChangeCode}
       />
      <div className='text-center my-4'>
       <Button type='Submit'>Save</Button>
      </div>
      </form>
      </div>
    </div>
  )
}

export default EditSnippetForm