import {blogs} from '../data/post'
import Link from 'next/link'
import prisma from "@/lib/db"
const Blog =async ()=>{
    const posts=await prisma.post.findMany({
        orderBy:{
            createdAt: "desc"
        },
        include:{
            author:true
        }
    })
    return(
       <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold">Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
             {posts.map((post,i)=>(
                <Link href={`/blogs/${post.id}`} key={post.id} className="shadow-md p-4 bg-white">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>Written by : {post.author?.name}</p>
                </Link>
             ))}
            </div>
       </div>
    )
}
export default Blog