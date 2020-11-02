import React, {useContext } from "react";
import Header from '../Container/Header';
import Products from '../Container/products';
import Preview from '../Container/Preview';
import FavList from '../Container/FavList';
import Main from '../Container/Main';
import Error from '../Container/Error'
import MainHeader from '../Container/MainHeader';
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
                <Route exact path='/' component={Main}></Route>
                <Route path='/Preview/:id' component={Preview}></Route>
                <Route path='/FavList' component={FavList}></Route>
            </Router>            
           :
            <Router>
                <Route exact path='/' component={Header}></Route>
                <Route exact path='/' component={Products}></Route>
                <Route path='/Preview/:id' component={Preview}></Route>
                <Route path='/FavList' component={FavList}></Route>
                <Route path='/MainHeader' component={MainHeader}></Route>
                <Route path="*"><Error /></Route>
              
            </Router>
        )
}
export default AppRoute