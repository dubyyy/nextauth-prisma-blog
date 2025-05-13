import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";



export async function POST(req:Request) {
    const user=await getCurrentUser();
    if(!user?.email){
        return NextResponse.json({message:"This user is not authenticated"})
    }
   


    try{

        const {title,content}=await req.json()

        const newPost= await prisma.post.create({
            data:{
                title,
                content,
                authorEmail:user.email
    
            }  
        })
        return NextResponse.json({newPost},{status:200})
    }catch(err){
        console.log("This is my error :", err)
    }

    


   
}