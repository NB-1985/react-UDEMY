import { Childcomponent } from "./childcomponents"
export const Parentcomponent=()=>{
   const greetparent=(Childname)=>{
    alert(`hello parent ${Childname}`)
   }
   return <Childcomponent greethandler={greetparent}></Childcomponent>
} 