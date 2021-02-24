import React from "react";
import {Link, useHistory} from "react-router-dom";
const Welcome = () => {
    const history =useHistory();
  return (
    <>
    <section >
    <div>
        <h1 className="h1">
          <span>w</span>
          <span>e</span>
          <span>l</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
        </h1>
      </div>
      <div >
        <h2 className="h2"  onClick={()=>{history.push("/signup")}}>Go to Sign up</h2>
      </div>
    </section>
 
    </>
  );
};

export default Welcome;
