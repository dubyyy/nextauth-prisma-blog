import Comment from "@/app/components/Comment"
import FormComment from "@/app/components/form-comments"
import { FC } from "react"
import prisma from "@/lib/db"

interface BlogDetailsPageProps{
    params:{
        id:string
    }
}

const BlogDetailPage:FC<BlogDetailsPageProps> = async({params})=>{

    const posts=await prisma.post.findFirst({
       where:{
        id:params.id,
       },
        include:{
            author:true
        }
    })

    return(
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold ">{posts?.title}</h1>
            <p>Written by {posts?.author?.name}</p>
            <div className="mt-4">{posts?.content}</div>
            <Comment postId={params.id} />
            <FormComment postId={params.id} />
        </div>

    )
}
export default BlogDetailPage