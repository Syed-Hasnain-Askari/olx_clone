import React from 'react';
import logo from './images/logo.webp';
import avatar from './images/avatar1.png'
import previewbanner from './images/previewbanner.png';
import { MdMyLocation } from "react-icons/md";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaRegBell } from 'react-icons/fa';
import { BsChat } from 'react-icons/bs';
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
                                    <span className="chevron-down-header"><ion-icon name="chevron-down"></ion-icon></span>
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
                                <a className="nav-link chat-icon ml-4" href="#"><BsChat size={26} /></a>
                            </li>

                            <li className="nav-item ml-4">
                                <a className="nav-link chat-icon " href="#"><FaRegBell size={26} /></a>
                            </li>
                            <li className="nav-item ml-4">
                                <img className="rounded-circle user-icon" src={avatar} alt="..."></img>

                            </li>
                            <li className="nav-item mt-3">
                            <div className="dropdown d-inline-flex dropleft">
                                    <span className="chevron-down" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <ion-icon name="chevron-down"></ion-icon>
                                    </span>

                                    <div className="dropdown-menu mt-5 ml-n5 mr-n5" aria-labelledby="dropdownMenuButton">

                                        <div className="list-group">
                                        <div className="media">
                                            <img src={avatar} className="rounded-circle ml-4 mt-3 user-icon  " alt="..." />
                                            <div class="media-body">
                                            <h6 class="mt-2 ml-2 text-muted"><small>Hellow</small></h6>
                                            <h4 class="ml-2">Hasnain Askari</h4>
                                            <a class="ml-2"><small>View and Edit Profile</small></a>
                                            </div>
                                        </div>
                                            <a href="#" className="list-group-item list-group-item-action">
                                            <div className="d-flex w-100 h-25">
                                            <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class=""
                                                     fill-rule="evenodd">
                                                    <path class="rui-77aaa" 
                                                    d="M349.46 85.333h487.619l40.635 40.635v609.524l-40.635 40.635h-487.619l-40.635-40.635v-609.524l40.635-40.635zM390.095 694.857h406.35v-528.254h-406.35v528.254zM146.286 247.873l40.635-40.635 40.635 40.635v609.524h528.254l40.635 40.635-40.635 40.635h-568.889l-40.635-40.635v-650.159zM512 329.143h162.54l40.635 40.635-40.635 40.635h-162.54l-40.635-40.635 40.635-40.635zM512 491.683h81.27l40.635 40.635-40.635 40.635h-81.27l-40.635-40.635 40.635-40.635z">
                                                    </path>
                                                    </svg>
                                                    <p className="mb-1 ml-3">My Ads</p>
                                            </div>
                                            <div className="d-flex w-100 h-25 pt-4">
                                            <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M426.667 42.667h170.667l42.667 42.667-42.667 42.667h256l42.667 42.667v768l-42.667 42.667h-682.667l-42.667-42.667v-768l42.667-42.667h256l-42.667-42.667 42.667-42.667zM213.333 896h597.333v-682.667h-597.333v682.667zM469.333 426.667v-85.333h256v85.333h-256zM298.667 426.667v-85.333h85.333v85.333h-85.333zM469.333 597.333v-85.333h256v85.333h-256zM298.667 597.333v-85.333h85.333v85.333h-85.333zM469.333 768v-85.333h256v85.333h-256zM298.667 768v-85.333h85.333v85.333h-85.333z">
                                            </path>
                                            </svg>
                                            <p className="mb-1 ml-3">Buy Bussiness Packages</p>


                                        </div>
                                        <div className="d-flex w-100 h-25 pt-4">
                                        <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M899.285 256l39.381 39.083v476.501l-39.381 39.083h-774.571l-39.381-39.083v-476.501l39.381-39.083h774.571zM853.461 511.573h-681.6v213.632h681.6v-213.632zM693.205 618.411h76.459l34.901 32.213-34.901 32.213h-128.896l-34.901-32.213 34.901-32.213h52.437zM853.461 341.248h-681.387v86.357l681.387-2.347v-84.053z">
                                        </path></svg>
                                        <p className="mb-1 ml-3">Bought Pakages and Billings</p>


                                        </div>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                            <div className="d-flex w-100 h-25">
                                            <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                                            <path class="rui-77aaa" d="M550.789 744.728c0 21.41-17.377 38.789-38.789 38.789s-38.789-17.377-38.789-38.789 17.377-38.789 38.789-38.789 38.789 17.377 38.789 38.789zM686.546 415.030c0 82.89-58.105 152.513-135.757 170.201v43.131l-38.789 38.789-38.789-38.789v-77.575l38.789-38.789c53.489 0 96.97-43.481 96.97-96.97s-43.481-96.97-96.97-96.97-96.97 43.481-96.97 96.97l-38.789 38.789-38.789-38.789c0-96.232 78.312-174.546 174.546-174.546s174.546 78.312 174.546 174.546zM512 861.090c-192.505 0-349.090-156.626-349.090-349.090 0-192.505 156.587-349.090 349.090-349.090 192.466 0 349.090 156.587 349.090 349.090 0 192.466-156.626 349.090-349.090 349.090zM512 85.333c-235.288 0-426.667 191.379-426.667 426.667s191.379 426.667 426.667 426.667 426.667-191.379 426.667-426.667-191.379-426.667-426.667-426.667z">
                                            </path></svg>
                                            <p className="mb-1 ml-3">Help</p>


                                        </div>
                                        <div className="d-flex w-100 h-25 pt-4">
                                        <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" 
                                        d="M341.333 640c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 725.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM682.667 384c55.595 0 102.912 35.712 120.533 85.333v0h92.8l42.667 42.667-42.667 42.667h-92.8c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-434.133l-42.667-42.667 42.667-42.667h434.133c17.621-49.621 64.939-85.333 120.533-85.333zM682.667 469.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM341.333 128c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 213.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667z"></path></svg>
                                        <p className="mb-1 ml-3">settings</p>


                                        </div>
                                            </a>

                                            <a href="#" className="list-group-item list-group-item-action">
                                            <div className="d-flex w-100 h-25">
                                            <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" 
                                            d="M891.008 822.315l47.659 48.853-47.701 48.085h-757.931l-47.701-48.853 47.787-48.043h757.888zM493.525 85.333l46.507 46.592 0.213 475.179 178.475-189.483 62.976 0.299-0.256 58.752 2.091 4.267-290.005 302.592-291.84-304.512 4.011-4.139 0.256-57.472 62.507 0.213 178.475 189.483 0.171-475.179 46.421-46.592z">
                                            </path></svg>
                                            <p className="mb-1 ml-3">Install OLX Lite app</p>


                                        </div>
                                            </a>

                                            <a href="#" className="list-group-item list-group-item-action">
                                            <div className="d-flex w-100 h-25">
                                            <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                                                <path class="rui-77aaa" d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"></path></svg>
                                            <p className="mb-1 ml-3">Logout</p>


                                        </div>
                                            </a>
                                            
                                        </div>

                                    </div>
                                </div>
                            </li>

                        </ul>
                        <button className="btn btn-outline my-2 my-sm-0 mr-5 rounded-pill sell-button" type="submit">Sell</button>

                    </div>
                </nav>
                <Category></Category>
                <img src={previewbanner} className="img-fluid d-block w-100"></img>
            </>
        </div>
    )
}
