import React, { Component } from "react";
import Header from '../Container/Header';
import Category from '../Container/Category';
import Products from '../Container/products';
import Preview from '../Container/Preview'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class AppRoute extends Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Header}></Route>
                <Route exact path='/' component={Products}></Route>
                <Route path='/Preview/:id' component={Preview}></Route>
            </Router>
        )
    }
}
export default AppRoute