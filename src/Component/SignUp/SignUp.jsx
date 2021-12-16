import React, { Component } from 'react'
import axios from "axios"
import img1 from "../../image/e4172b27-0c10-4b3f-b509-8242755caa2e (1).png"
import { NavLink } from 'react-router-dom'



class SignUp extends React.Component {

    state = {school : [] , classes : []}

    user = {
        first_name : "" ,
        last_name : ""  ,
        email : "" ,
        schoole : "" ,
        classes : "" ,
        password : ""
    }

    getUser = (e) => {
        this.user[e.target.name] = e.target.value
        //console.log(this.user.schoole)
    }

    getSchool = async () => {
        let {data} =await axios.get(`https://react-task-api.herokuapp.com/api/schools`)

        this.setState({
            school :data
        })
        //console.log(data)
       
    }

    getClasses = async () => {
        let {data} =await axios.get(`https://react-task-api.herokuapp.com/api/classes` , this.user.schoole )
        
       
        
        this.setState({
            classes :data
        })
        
        console.log("12")
    }

    sendData = async (e) => {
        e.preventDefault()
        e.target.reset()
        let {data} = await axios.post(`https://react-task-api.herokuapp.com/api/users/signup` , this.user)

        console.log(data)
    }

    

    async componentDidMount () {
        await this.getSchool();

        if(this.user.schoole !== " "){
            await this.getClasses();
        }
        
       
    };

   

    render() { 
        return <>

            {/* _______________start SignUp form____________________ */}

            <div className="signUp mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 px-0">

                            <div className="buttons mb-3">
                                <NavLink to="/signUp" className="mr-3 text-white bg-warning p-2 rounded">Sign Up</NavLink>
                                <NavLink to="/signIn" className="text-white bg-warning p-2 rounded">Sign In</NavLink>
                            </div>

                            {/* start form  */}
                            <form onSubmit={this.sendData}>

                                <div className="d-flex">
                                    <div className="firstName w-50 mr-3">
                                        <label htmlFor="first_name">First Name</label>
                                        <input onChange={this.getUser} type="text" name="first_name" className="form-control mb-3" />
                                    </div>
                                    <div className="lastName w-50">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input onChange={this.getUser} type="text" name="last_name" className="form-control mb-3 "/>
                                    </div>
                                </div>

                                <div className="email">
                                    <label htmlFor="email">Email</label>
                                    <input onChange={this.getUser} type="email" name="email" className="form-control mb-3 "/>
                                </div>

                                <div className="school">
                                    <label htmlFor="school">School</label>
                                    <select onChange={this.getUser} className='w-100 form-control mb-3' name="schoole" id="school">
                                       {this.state.school.map((value , index) => {
                                           return (
                                               <option key={index} value={value._id}>{value.name}</option>
                                           )
                                       })}
                                    </select>
                                </div>

                                <div className="classes">
                                    <label htmlFor="classes">classes</label>
                                    <select onChange={this.getUser} className='w-100 form-control mb-3' name="classes" id="classes">
                                       {this.state.classes.map((value , index) => {
                                           return (
                                               <option key={index} value={value.name}>{value.name}</option>
                                           )
                                       })}
                                    </select>
                                </div>

                                <div className="passwprd">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" className="form-control mb-3 "/>
                                </div>

                                <button className="btn btn-warning text-white w-100">Sign Up</button>  
                                
                            </form>

                            {/* end form */} 

                        </div>
                        <div className="col-md-6">
                            <div className="image">
                                <img src={img1} alt="" className='w-75' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        
        </>;
    }
}
 
export default SignUp;