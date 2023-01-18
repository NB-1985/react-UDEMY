import { useState } from "react"

export const Form=()=>{ 
    const [username, setusername] = useState(" ")
    const handlesubmit=(event)=>{
        event.preventDefault()
        alert(`form data is ${username}`)
    }
    return ( 
    
    
        <form onSubmit={handlesubmit}> 
            <div>
            <lable> username</lable>
            <input
             type="text"  
             value={username} 
             onChange={(event)=>setusername(event.target.value)}/>
            </div>
            <button type="submit">submit</button>
        </form>
    
    )
}