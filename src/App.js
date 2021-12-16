import { Component } from "react";
import {Switch , Route } from "react-router-dom";

import SignUp from './Component/SignUp/SignUp';

import SignIn from "./Component/SignIn/SignIn";


class App extends Component {
  render(){
    return <>

      {/* <SignUp />
      <SignIn /> */}
    
      
      <Switch>
        
        <Route path="/signIn" component={SignIn}/>
        <Route path="/signUp" component={SignUp}/>
        <Route exact path="/" component={SignUp}/>
        
      </Switch>
    </>
  }
}

export default App