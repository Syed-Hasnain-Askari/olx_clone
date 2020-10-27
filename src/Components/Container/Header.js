import React, { Component } from 'react';
import logo from './images/logo.webp';
import {MdMyLocation} from "react-icons/md";
import {HiOutlineLocationMarker} from 'react-icons/hi';
import Modal from "react-responsive-modal";
import previewbanner from './images/previewbanner.png'
import './App.css';
import Category from './Category';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top top-navbar">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="img-thumbnil logo"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item-location">
                                <div className="input-icons dropdown">
                                    <ion-icon name="search"></ion-icon>
                                    <button className="btn location" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Lahore<span className="chevron-down"><ion-icon name="chevron-down"></ion-icon></span>
                                    </button>
                                    {/* <span className="chevron-down"><ion-icon name="chevron-down"></ion-icon></span> */}

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="list-group">
                                            <a href="#" className="list-group-item pt-0 text-decoration-none">
                                                <div className="d-flex w-100 h-25 pt-3">
                                                   
                                                    <MdMyLocation size={30}></MdMyLocation>
                                                
                                                    <h5 className="mb-1 ml-3 text-primary">Use Current Location</h5>
                           
                                                </div>
                                               <div><p className="ml-5 text-primary">location blocked. Check browser/phone settings.</p></div>
                                            </a>
                                            <a href="#" className="list-group-item text-decoration-none ">
                                                <p className="text-muted font-weight-normal ">POPULAR LOCATION</p>
                                                <div className="d-flex w-100 h-25 mt-3 pt-3">
                                                    <HiOutlineLocationMarker  size={30}></HiOutlineLocationMarker>
                                                    <p className="mb-1 ml-3 font-weight-normal font-weight-lighter">Punjab</p>
                                                    
                           
                                                </div>
                                                <div className="d-flex w-100 h-25 mt-3 pt-3">
                                                    <HiOutlineLocationMarker  size={30}></HiOutlineLocationMarker>
                                                    <p className="mb-1 ml-3">IslamabadnCapital Territory</p>
                                                    
                           
                                                </div>
                                                <div className="d-flex w-100 h-25 mt-3 pt-3">
                                                    <HiOutlineLocationMarker  size={30}></HiOutlineLocationMarker>
                                                    <p className="mb-1 ml-3">Sindh</p>
                                                    
                           
                                                </div>
                                                <div className="d-flex w-100 h-25 mt-3 pt-3">
                                                    <HiOutlineLocationMarker  size={30}></HiOutlineLocationMarker>
                                                    <p className="mb-1 ml-3">Khybar Pakhtunkhwa</p>
                                                    
                           
                                                </div>
                                              
                                            </a>
                                         
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className="input-group nav-item-find">
                                <input type="text" placeholder="Find Cars,Mobile Phones and more..." className="form-control find" aria-label="Username" aria-describedby="basic-addon1"></input>
                                <div className="input-group-prepand">
                                    <span className="input-group-text search-icon" id="basic-addon1"><ion-icon name="search"></ion-icon></span>
                                </div>
                            </li>
                        </ul>

                        <a href="#" className="active">login</a>
                        <button className="btn btn-outline-success my-2 my-sm-0 mr-5"type="submit">SignUp</button>

                    </div>
                </nav>
                <Category></Category>
                <img src={previewbanner} className="img-fluid d-block w-100"></img>
                {/* Sign up model */}

                {/* <Modal open={sign} onClose={this.onCloseModal}>
                    <div className="modal-body">
                        <h2>Get Started Absolutely<span> Free!</span></h2>
                        <span className="subtitle">No credit card needed</span>
                        <form className="contact-form form-validate3" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
                        </form>
                    </div>
                </Modal>

                {/* <!-- signUp End -->
                  <!-- login --> */}

                {/* <Modal open={login} onClose={this.onCloseModalclose}>

                    <div className="modal-body">
                        <h2>Login and Get <span>Started</span></h2>
                        <span className="subtitle">Just fill in the form below</span>
                        <form className="contact-form form-validate4" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
                        </form>
                    </div>
                </Modal> */} 
            </React.Fragment>
        )

    }
}

export default Header