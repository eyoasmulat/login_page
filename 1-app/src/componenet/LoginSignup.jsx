import React,{useState } from "react";
import './LoginSignup.css'
// import email_icon from './email_icon.svg'; 
// import password_icon from './password_icon.svg';
// import user_icon from './user_icon.svg';

function LoginSignup() {
    const [action ,setAction] =useState("Login")
    return ( 
   <div className="container">
     <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
     </div>
     <div className="inputs">
        {action==="Login"? <div></div>:<div className="input"><img src="" alt=""/>
        <input placeholder="name" type="text"></input></div>}
     
     <div className="input">
     <img src="" alt="" />
     <input type="email" placeholder="email"/>
     </div>
     <div className="input">
     <img src="" aslt="" />
     <input type="password" placeholder="password"/>
     </div>
     </div>
     {action==="Sign up"? <div></div>: <div className="forgot-password">lost password?<span>Click Here!</span></div>}
    
     <div className="submit-container">
     <div className= {action==="Login"?"submit gray":"submit" } onClick={()=>{setAction("Sign up")}}>
            Sign up
        </div>
        <div className={action==="Sign up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
     </div>
   </div>
     );
}

export default LoginSignup;