export function Hello(props){
    return <div>
        <h1>Hello There namaste {props.name} {props.hero}</h1>
      {props.children}       
    </div>
}
// export default hello 