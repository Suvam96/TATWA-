import React from 'react'
import {Link, useHistory} from "react-router-dom";

const Signup = () => {
    const history =useHistory();
    return (
        <>
        <div className="container">
    <span className="error animated tada" id="msg"></span>
    <form name="form1" className="box" onSubmit={()=>{history.push("/login")}}>
      <h4>Welcome</h4>
      <h5>Sign up to your account.</h5>
         <input type="text" name="name" placeholder="Name" autocomplete="off"/>
        <input type="text" name="email" placeholder="Email" autocomplete="off"/>
    
        <i className="typcn typcn-eye" id="eye"></i>
        <input type="password" name="password" placeholder="Passsword" id="pwd" autocomplete="off"/>
        <label>
        
          
        </label>
      
        <input type="submit" value="Sign up" className="btn1" />
      </form>
        <Link href="#" className="dnthave">Already have an account? <span onClick={()=>{history.push("/login")}}>Sign in</span> </Link>
  </div> 
        </>
    )
}

export default Signup
