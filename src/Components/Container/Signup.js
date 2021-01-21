import React,{useRef, useState,useContext} from 'react'
import {auth} from '../../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
export default function Signup() {
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const email = useRef()
    const password = useRef()
    const confpassword = useRef()
    const notify = () =>{
        toast.success("Account has been succesfully created")
    }
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
            notify()
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
            <div className="row d-flex justify-content-center mx-auto">
                <div className="col">
                    <h1 className="text-center text-dark mt-4">SignUp</h1>
                    <ToastContainer />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                    <label className="label">Email</label>
                    <input type="email" ref={email} className="form-control" required></input>
                    <label className="label">Password</label>
                    <input type="password" ref={password} className="form-control" required></input>
                    <label className="label">Confirm Password</label>
                    <input type="password" ref={confpassword} className="form-control" required></input>
                    <Link to='/SignIn'>
                    <label className="col-form-label">
                    I have already an account
                    </label>
                    </Link>
                    <label className=" col-form-label alert-danger">{error}</label>
                    <div className="row">
                    <div className="col">
                    <button disabled={loading} className="btn btn-outline-info mt-3">Signup</button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
