export const Childcomponent=(props)=>{
    return <div>
        <button onClick={()=> props.greethandler("childS")}>Greet parent</button>
    </div>
}   