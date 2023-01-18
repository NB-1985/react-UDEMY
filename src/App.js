import logo from './logo.svg';

import "./App.css";
import {Hello} from './component/hi';
import { Message } from './component/Message';
import { Clickhandler  } from './component/clickhandler';
import { Parentcomponent } from './component/parentcomponents';
import Usergreeeting from './component/usergreetings';
import { Namelist } from './component/Namelist';
import { Stylesheet } from './component/stylesheet';
import {Inline} from './component/inline'
import './appstyles.css'
import  './appstyle.modules.css'
import { Form } from './component/form';
import { Postlist } from './component/postlist';
import { Postform } from './component/postform';
function App() {
  // const firstname="neel";
  // const lastname ="bhimani";
  // const age="45"
  // const role="js developer"
  return (
    <div className="App">
{/* 
      <Hello name="neel" >
      <button> ACTION</button></Hello>
      
      <Hello name="nis"  hero="shinti">
        <p> this is a children prop i </p>
      </Hello> */}
       {/* <Message></Message> */}
    {/* <Clickhandler></Clickhandler> */}
    {/* <Parentcomponent></Parentcomponent> */}
     {/* <Namelist></Namelist>  */}
    {/* <Usergreeeting></Usergreeeting> */}
    {/* <Stylesheet></Stylesheet> */}
    {/* <Inline></Inline>
    <h1 className='error'>
      ERROR
    </h1>
    <h1 className="success"> SUCCESS </h1> */}
    {/* <Form></Form> */}
    
    
    
    
    <Postform></Postform>
    <Postlist></Postlist>
    
      {/* <h1>Full name={`${firstname} ${lastname}`}</h1> 
      <p>Age: {age}</p>
      <p> job: {role} </p>   */}

    </div> 
  );
}

export default App;


// import React from "react";
// import logo from './logo.svg';
// import './App.css'

// function App(){
//   return (
//     <div className="App">
//     <h1>NEEL BHIMANI</h1>
//     <p>HAR HAR MAHADEV</p>
//     </div>  
//   )

// }
// export default App;