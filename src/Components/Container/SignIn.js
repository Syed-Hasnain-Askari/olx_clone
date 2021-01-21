import React, { useState, useRef } from "react";
import {auth} from '../../firebase'
import {useHistory} from 'react-router-dom'
import './App.css';
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
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col">
                    <h3 className="text-center">Sign In</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" ref={email} className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" ref={password} className="form-control" placeholder="Enter password" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        <label className=" alert-danger">{error}</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
                    </div>
                </div>
            </div>
        );
}