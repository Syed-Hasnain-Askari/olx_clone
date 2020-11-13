import React, { Component } from 'react';
import './App.css';
import {auth} from '../../firebase'
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import Product from './Products'

class Phone extends Component {
  componentDidMount() {
    const uiConfig = {
      signInSuccessUrl: "localhost:3000/Products", //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: "localhost:3000/Products"
    };
    var ui = new firebaseui.auth.AuthUI(auth);
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <>
      <h1>REACT PHONE AUTHENTICATION</h1>
      <div id="firebaseui-auth-container"></div>
      </>
    )
  }
}
export default Phone