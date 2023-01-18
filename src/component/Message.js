import {useState} from "react"

export const Message=()=>{
    const [message,setmessage] = useState("Hello Visitor")
    return (
    
    <div>
    <h1>{message}</h1>
    <button onClick={()=>setmessage("Thnak You for subscribing")}>SUBSCRIBE</button>
    </div>
    )
}