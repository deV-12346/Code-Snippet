import EditSnippetForm from '@/components/EditSnippetForm'
import { prisma } from '@/lib/prisma'
import React from 'react'
const EditPage = async({params}:{params:Promise<{slug:string}>}) => {
  const id = parseInt((await params).slug)
  const snippet = await prisma.snippet.findUnique({
    where:{
      id
    }
  })
  return <EditSnippetForm snippet={snippet}/>

};

export default EditPage