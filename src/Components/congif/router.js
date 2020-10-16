import React, { Component } from "react";
import Header from '../Container/Header';
import Card from '../Container/Cards';
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
                <Route path='/Card' component={Card}></Route>
            </Router>
        )
    }
}
export default AppRoute