"use server"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export const saveSnippet = async (id: number, code: string) => {
      const sni = await prisma.snippet.update({
            where: {
                  id,
            },
            data: {
                  code
            }
      })
      console.log(sni)
      redirect(`/snippet/${id}`)
}
export const deleteSnippet = async (id: number) => {
      const sni = await prisma.snippet.delete({
            where: {
                  id
            }
      })
      console.log(sni)
      redirect("/")
}
export const createSnippet = async (prev: { message: string }, formData: FormData) => {
      try {
            const title = formData.get("title")
            const code = formData.get("code")
            if (typeof title !== "string" || title.length < 5) {
                  return { message: "Title is required must be 5 words" }
            }
            if (typeof code !== "string" || code.length < 10) {
                  return { message: "code is required must be 10 words" }
            }
            const snippet = await prisma.snippet.create({
                  data: {
                        title,
                        code
                  }
            })
            console.log(snippet)

      } catch (error: any) {
            return { message: error.message }
      }
      redirect("/")
}