import React,{useRef, useState,useContext} from 'react'
import {auth} from '../../firebase'
import './signup.css';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
export default function Signup() {
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const email = useRef()
    const password = useRef()
    const confpassword = useRef()
    //Run on Click Event
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(password.current.value!== confpassword.current.value){
            return setError("Password do not match")
        }
        auth.createUserWithEmailAndPassword(email.current.value,password.current.value)
            .then((userCredential) => {
        })
        .then(()=>{
            auth.signOut()
        })
        .catch((error) => {
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
                    <h1>SignUp</h1>
                  </div>
                </div>
                <form name="login" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input ref={email} type="email" name="email" 
                           className="form-control" id="email" 
                           aria-describedby="emailHelp" 
                           placeholder="Enter email" 
                           required
                           />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input ref={password} type="password" 
                           name="password" id="password" 
                           className="form-control" 
                           aria-describedby="emailHelp" 
                           placeholder="Enter Password" 
                           required
                           />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Confirm Password</label>
                    <input ref={confpassword} type="password" name="password" id="confpassword" className="form-control" 
                           aria-describedby="emailHelp" 
                           placeholder="Enter Password" 
                           required
                           />
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
                  <div className="form-group">
                    <Link to="/SignIn">
                    <p className="text-center">Don't have account? <a id="signup">Sign up here</a></p>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )
}
