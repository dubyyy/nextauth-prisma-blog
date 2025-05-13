"use client"
import React, { ChangeEvent, FormEvent, useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import { FormData } from "../types/formData";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from 'next/navigation'; // ← for App Router


const inputClass=  "w-full border border-gray-500 py-2 px-3 rounded-md  focus:outline-none focus:border-blue-300 focus:border-3";


const FormNewPost = ()=>{
    const [formData,setFormData]=useState<FormData>({
        title:"",
        content:""
    })
    const { data } = useSession();
    const router=useRouter()
    
    const handleChange=(e:ChangeEvent< HTMLInputElement | HTMLTextAreaElement>)=>{
        e.preventDefault();
        const { name,value}=e.target;
        setFormData({
            ...formData,
            [name] :value
    
        })
    }
   
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
        const response = await axios.post("/api/posts", formData);
        if (response.status===200){
            router.push(`/blogs/${response.data.newPost.id}`)
            
        }
        } catch(err){
          console.log("There was an error",err);
        }
      };
     
      
      //
    
    return <form className="p-4 mx-auto max-w-md"  onSubmit={handleSubmit}>
        <div className="mt-4">
            <input type="text" className={`${inputClass}`} placeholder="Enter the title" name="title" onChange={handleChange} value={formData.title}/>
            <div className="mt-4">
                <TextareaAutosize className={`${inputClass}`} placeholder="Enter the content" minRows={5} name="content" onChange={handleChange} value={formData.content}/>
            </div>
            <button 
            disabled={!data?.user?.email}
            type="submit" className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-md ">Submit</button>
        </div>
    </form>
}
export default FormNewPost 