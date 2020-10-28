import React, { Component } from 'react';
import logo from './images/logo.webp';
import { MdMyLocation } from "react-icons/md";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Modal from 'react-awesome-modal';
import { withRouter } from 'react-router-dom'
import firebase from "firebase/app";
import { auth } from "../../firebase"
import { signInWithGoogle } from '../../firebase'
import previewbanner from './images/previewbanner.png'
import './App.css';
import Category from './Category';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible : false,
            isLoggedIn: null,
        };
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          if (user) { this.setState({ isLoggedIn: true })} 
          else { this.setState({ isLoggedIn: false })}
        })
      }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
    render() {
        return (
            <React.Fragment>
                  <Modal
                        visible={this.state.visible}
                        width="400"
                        height="584"
                        effect="fadeInUp"
                        onClickAway={() => this.closeModal()}
                    >
                        <div className="mt-5 p-3 popup_wrapper">


                            <div className="row mx-auto mb-2">

                                <button className="btn btn-lg btn-block btn-outline popup-button text">Continue with phone</button>

                            </div>

                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button ">Continue with facebook</button>
                                
                            </div>
                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button" onClick={()=>signInWithGoogle()} >Continue with google</button>
                                
                            </div>
                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button">Continue with email</button>
                                
                            </div>

                            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                        </div>
                    </Modal>
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
                                        Punjab
                                    <span className="chevron-down"><ion-icon name="chevron-down"></ion-icon></span>
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
                                                    <HiOutlineLocationMarker size={30}></HiOutlineLocationMarker>
                                                    <p className="mb-1 ml-3 font-weight-normal font-weight-lighter">Punjab</p>


                                                </div>
                                                <div className="d-flex w-100 h-25 mt-3 pt-3">
                                                    <HiOutlineLocationMarker size={30}></HiOutlineLocationMarker>
                                                    <p className="mb-1 ml-3">IslamabadnCapital Territory</p>


                                                </div>
                                                <div className="d-flex w-100 h-25 mt-3 pt-3">
                                                    <HiOutlineLocationMarker size={30}></HiOutlineLocationMarker>
                                                    <p className="mb-1 ml-3">Sindh</p>


                                                </div>
                                                <div className="d-flex w-100 h-25 mt-3 pt-3">
                                                    <HiOutlineLocationMarker size={30}></HiOutlineLocationMarker>
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

                        <label className="active" onClick={() => this.openModal()}>login</label>
                        <button className="btn btn-outline-success my-2 my-sm-0 mr-5" type="submit">SignUp</button>

                    </div>
                </nav>
                <Category></Category>
                <img src={previewbanner} className="img-fluid d-block w-100"></img>
            </React.Fragment>
        )

    }
}

export default Header