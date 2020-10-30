import React, {useContext } from "react";
import Header from '../Container/Header';
import Products from '../Container/products';
import Preview from '../Container/Preview';
import FavList from '../Container/FavList';
import Error from '../Container/Error'
import Main from '../Container/Main'
import { UserContext } from "../../provider/Userprovider";
import "firebase/auth";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
function AppRoute(){
    
        const user = useContext(UserContext);
        return(
            user ?
               <Router>
                  <Main/> 
               </Router>                
           :
            <Router>
                <Route exact path='/' component={Header}></Route>
                <Route exact path='/' component={Products}></Route>
                <Route path='/Preview/:id' component={Preview}></Route>
                <Route path='/FavList' component={FavList}></Route>
            </Router>
        )
}
export default AppRoute