import React, { Component } from 'react'
import { Route ,Redirect } from 'react-router-dom'
import jwt_decode from "jwt-decode";

export default class ProtectedRoutes extends Component {
    render() {
        console.log(this.props)

        let token = localStorage.getItem("token");
        try {
            var decoded = jwt_decode(token);
            console.log(decoded)
        } catch (error) {
            localStorage.clear();
            return <>
                <Redirect to="/Login" />
            </>
        }

        if(token){

            if(this.props.path === "/home"){
                return <>
                    <Route path={this.props.path} component={this.props.component}/>
                </> 
            }
             
        }else{
            return <>
                <Redirect to="/Login" />
            </>
        }
        
    }
}
