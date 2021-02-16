import React, { useState, useRef } from "react";
import {auth} from '../../firebase'
import {useHistory,Link} from 'react-router-dom'
import './signup.css';
export default function SignIn(){
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const email = useRef()
    const password = useRef()
    const history = useHistory()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email.current.value,password.current.value)
            .then((userCredential) => {
            history.push('/')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            setError(errorMessage)
            // ..
        });
        setLoading(false)
    }
        return (
        <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div id="first">
              <div className="myform form ">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h1>Login</h1>
                  </div>
                </div>
                <form name="login" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input ref={email} 
                           type="email" 
                           name="email" 
                           className="form-control" 
                           id="email" 
                           aria-describedby="emailHelp" 
                           placeholder="Enter email"
                           required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input  ref={password} 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter Password" 
                            required/>
                  </div>
                  <div className="form-group">
                    <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                  </div>
                  <div className="col-md-12 text-center ">
                    <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                  </div>
                  <label className=" alert-danger">{error}</label>
                  <div className="col-md-12 ">
                    <div className="login-or">
                      <hr className="hr-or" />
                      <span className="span-or">or</span>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p className="text-center">
                      <a href="javascript:void();" className="google btn mybtn"><i className="fa fa-google-plus">
                        </i> Signup using Google
                      </a>
                    </p>
                  </div>
                  <div className="form-group">
                    <Link to='/Signup'><p className="text-center">Don't have account? <a id="signup">Sign up here</a></p></Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
            </div>
            </div>
        );
}