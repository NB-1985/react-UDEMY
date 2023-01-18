export const Clickhandler=()=>{
    const Clickhandle =(event,count=1)=>{
        console.log("Button Clicked",(event,count))
    }
    return <div> 
        <button onClick={Clickhandle}>CLICK</button>
        <button onClick={(event)=>Clickhandle(event,5)}>CLICK 5</button>
    </div>
}