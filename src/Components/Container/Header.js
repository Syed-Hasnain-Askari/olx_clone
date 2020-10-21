import React,{Component} from 'react';
import logo from './images/logo.webp';
import Modal from "react-responsive-modal";
import previewbanner from './images/previewbanner.png'
import './App.css';
import Category from './Category';

class Header extends Component{
    constructor(props) {
        super(props)

        this.state = {
            sign: false,
            login: false,

        }
    }

    onOpenModal = () => {
        this.setState({ sign: true });
    };

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModal = () => {
        this.setState({ sign: false });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };
        render(){
            const { login, sign } = this.state;
            return(
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
                    
                        <button className="text-login" href="#" onClick={this.onOpenModalLogin}>login</button>
                        <button className="btn btn-outline-success my-2 my-sm-0 mr-5"  onClick={this.onOpenModal} type="submit">SignUp</button>
                    
                </div>
            </nav>
           <Category></Category>
           <img src={previewbanner} className="img-fluid d-block w-100"></img>
           {/* Sign up model */}

           <Modal open={sign} onClose={this.onCloseModal}>
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

                <Modal open={login} onClose={this.onCloseModalclose}>
                
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
                </Modal>
        </React.Fragment>
    )
        
}}
        
export default Header