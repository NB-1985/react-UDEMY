import { useState,useEffect } from "react"


export const Postlist=()=>{
    const[posts,setposts]=useState([]) 
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then((response)=>response.json())
       .then((data)=>setposts(data))
       .catch((error)=>{
        console.log(error)
        })
    },[])
    return<div>
        <ul>
            {posts.map((post)=>{
                return<li key={post.id} >{post .title}</li>
            })}
        </ul>
    </div>
}