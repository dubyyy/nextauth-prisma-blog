'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, useState } from "react"

interface FormCommentProps{
    postId:string;
}

 
const FormComment:FC<FormCommentProps>=({postId})=>{
    const [comment,setComment]=useState<string>()
    const router=useRouter()
    //handleCommentChange
    //handleSubmitComment

    const handleCommentChange=(e:ChangeEvent<HTMLInputElement>)=>{
       // e.preventDefault();
        setComment((val)=>e.target.value)
    }
    const handleSubmitComment= async()=>{
        if(comment?.trim() !== " "){
            try {
                const resonse=await axios.post('/api/comments',{
                    postId,text:comment
                })
                if(resonse.status===200){
                    router.refresh()
                }
            }catch {

            }
        }
        console.log(comment)
    }
    return(
        <div className="mt-4">
            <label htmlFor="comment" className="font-bold text-sm text-gray-700 block">
                Add Comment    
            </label> 
            <input type="text"name="comment" onChange={handleCommentChange} className="w-full border border-gray-500 py-2 px-3 rounded-md  focus:outline-none focus:border-blue-300 focus:border-3" />
            <button type="submit" onClick={handleSubmitComment} className="mt-5 bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-md ">Submit Comment</button>
        </div>
    )
}
export default FormComment