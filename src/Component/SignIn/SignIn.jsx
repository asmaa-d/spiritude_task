import React, { Component } from 'react'
import axios from "axios"

class SignIn extends React.Component {

    state = {errorMessage:""}

    user = {
        email : "" ,
        password : ""
    }

    getUser = (e) => {
        this.user[e.target.name] = e.target.value
       // console.log(this.user)
    }

    sendData = async (e) => {
        e.preventDefault()
        let {data} = await axios.post(`https://react-task-api.herokuapp.com/api/users/signin` , this.user)

        if(data.messege === "success"){

            localStorage.setItem("tocken" , data.token);
            //home
            this.props.history.replace("/home")
        }else {
            this.setState({
                errorMessage : data.message
            })
        }

        console.log(data)
    }

    render() { 
        return <>

            <div className="SignIn">
                <div className="container">
                    
                    <form className='w-75 mx-auto mt-5' onSubmit={this.sendData}>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input onChange={this.getUser} type="email" name="email" className="form-control mb-3 "/>
                        </div>

                        <div className="passwprd">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control mb-3 "/>
                        </div>

                        <button className="btn btn-warning text-white w-100">Sign Up</button>  

                    </form>

                </div>
            </div>
        
        </>;
    }
}
 
export default SignIn;