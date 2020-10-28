import React, { Component } from "react";
import Header from '../Container/Header';
import Products from '../Container/products';
import Preview from '../Container/Preview';
import FavList from '../Container/FavList';
import Main from '../Container/Main'
import firebase from "firebase/app";
import "firebase/auth";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
class AppRoute extends Component{
    render(){
        const user = null;
        return(
            user ?
            <Main />
          :
            <Router>
               
                <Route exact path='/' component={Header}></Route>
                <Route exact path='/' component={Products}></Route>
                <Route path='/Preview/:id' component={Preview}></Route>
                <Route path='/FavList' component={FavList}></Route>
            </Router>
        )
    }
}
export default AppRoute