'use client'
import React from "react";
import {signOut} from "next-auth/react"

const ButtonLogout=()=>{
    return(
        <button onClick={()=>signOut()} className="text-white hover:underline">Sign Out</button>
    )
}
export default ButtonLogout