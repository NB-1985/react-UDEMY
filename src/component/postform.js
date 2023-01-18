import { useState } from "react"

export const Postform=()=>{
    const [userid, setuserid] = useState("")
    const [title, settitle] = useState("")
    const [body, setbody] = useState("")
    const submithandler=(event)=>{
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              body: body,
              userId: userid,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json))
        

    }
    return <form onSubmit={submithandler}>
        <div>
            <input  type="text" 
            placeholder="userid " 
            vlaue={userid} 
            onChange={(e)=>setuserid(e.target.value)}/>
        </div>
        <div>
            <input  type="text" 
            placeholder="title" 
            value={title}
            onChange={(e)=>settitle(e.target.value)}/>
        </div>
        <div>
            <input  type="text" 
            placeholder="body" 
            vlaue={body}
            onChange={(e)=>setbody(e.target.value)}/>
        </div>
        <button type="submit">submit</button>
    </form>
}