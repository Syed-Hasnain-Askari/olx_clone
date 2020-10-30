import React from 'react';
import logo from './images/logo.webp';
import avatar from './images/avatar1.png'
import previewbanner from './images/previewbanner.png';
import { MdMyLocation } from "react-icons/md";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {FaRegBell} from 'react-icons/fa';
import {BsChat} from 'react-icons/bs';
import Category from './Category';
import './App.css';

export default function MainHeader() {
    return (
        <div>
             <>
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

                            <li className="nav-item">
                            <a className="nav-link chat-icon ml-4" href="#"><BsChat size={26}/></a>
                            </li>
                            
                            <li className="nav-item ml-4">
                            <a className="nav-link chat-icon " href="#"><FaRegBell size={26}/></a>
                            </li>
                            <li className="nav-item ml-4">
                            <img className="rounded-circle user-icon" src={avatar} alt="..."></img>
                            <span className="chevron-down"><ion-icon name="chevron-down"></ion-icon></span>
                            </li>

                        </ul>

                        <label className="active mr-3">login</label>
                        <button className="btn btn-outline my-2 my-sm-0 mr-5 rounded-pill sell-button" type="submit">SignUp</button>

                    </div>
                </nav>
                <Category></Category>
                <img src={previewbanner} className="img-fluid d-block w-100"></img>
            </>
        </div>
    )
}
