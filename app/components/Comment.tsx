import React from "react";
import { FC } from "react"
import prisma from "@/lib/db"
interface CommentsProps{
    postId:string
}

const Comment:FC<CommentsProps>=async({postId})=>{

    const comments=await prisma.comment.findMany({
        where:{
          postId,
        },
         include:{
             author:true
         }
     })

    return(
       <div className="mt-8">
            <h2 className="text-2xl font-bold">Comment</h2>
            <ul>
                {
                    comments.map((comment)=>(
                        <li key={comment.id} className="bg-slate-300 p-2.5">
                            <div className="flex items-center mb-2">
                                <div className="mr-2 text-blue-500">{comment?.author?.name}</div>
                                <div className="text-gray-500">{comment?.createdAt?.toLocaleString()}</div>
                            </div>
                            <p>{comment?.text}</p>
                        </li>
                    ))
                }
            </ul>
            
       </div>
    )
}
export default Comment

