export const Namelist=()=>{
    const array=['neel','shinti','bunty']
    return <div>{
        array.map((name)=>(
         <h2 key={name}> {name}</h2>))
    }
    </div>
}