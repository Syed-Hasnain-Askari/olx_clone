import React from 'react';
import logo from './images/img.webp';
import './App.css';
import Category from './Category';
import Card from './Cards';

function Header() {
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
                                <button class="btn location" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Lahore<span className="chevron-down"><ion-icon name="chevron-down"></ion-icon></span>
                                </button>
                                {/* <span className="chevron-down"><ion-icon name="chevron-down"></ion-icon></span> */}
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item text-center" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </li>
                        <li className="input-group nav-item-find">
                            <input type="text" placeholder="Find Cars,Mobile Phones and more..." className="form-control find" aria-label="Username" aria-describedby="basic-addon1"></input>
                            <div class="input-group-prepand">
                                <span class="input-group-text search-icon" id="basic-addon1"><ion-icon name="search"></ion-icon></span>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <a className="text-login" href="#"><b>login</b></a>
                        <button className="btn btn-outline-success my-2 my-sm-0 mr-5" type="submit">Search</button>
                    </form>
                </div>
            </nav>  
            <Category></Category> 
            <Card></Card>        
        </React.Fragment>
    );
}
export default Header