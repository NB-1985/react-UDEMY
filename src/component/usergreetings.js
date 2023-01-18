const Usergreeeting=()=>{
    const isloggedin=true
   
    return (
         <div>
        {/* welcome {isloggedin   ?"guest" : "neel"} */}
             
       <h1>welcome {isloggedin && "Neel"}</h1>
        </div>
    )
}
export default Usergreeeting