import React from "react";

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from "./Welcome";

const  App = ()=> {
  
  return (
 <>

<Router>

        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={Home} />

        </Switch>
      
      </Router>
 </>
  );
}

export default App;
