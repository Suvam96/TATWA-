import React from 'react';
import {Link, useHistory} from "react-router-dom";

const Login = () => {

    const history =useHistory();

    return (
        <>
       <div className="container">
    <span className="error animated tada" id="msg"></span>
    <form name="form1" className="box" onSubmit={()=>{history.push("/home")}} >
      <h4>Welcome</h4>
      <h5>Sign in to your account.</h5>
        <input type="text" name="email" placeholder="Email" autocomplete="off"/>
        <i className="typcn typcn-eye" id="eye"></i>
        <input type="password" name="password" placeholder="Passsword" id="pwd" autocomplete="off"/>
        <label>
          <input type="checkbox"/>
          <span></span>
          <small className="rmb">Remember me</small>
        </label>
        <Link href="#" className="forgetpass">Forget Password?</Link>
        <input type="submit" value="Sign in" className="btn1"/>
      </form>
        <Link href="#" className="dnthave">Don’t have an account? <span onClick={()=>{history.push("/signup")}}>Sign up</span></Link>
  </div> 
        </>
    )
}

export default Login;
