import React, {useContext } from "react";
import Product from '../Container/Products';
import Preview from '../Container/Preview';
import {FavList} from '../Container/FavList';
import Error from '../Container/Error'
import Example from '../Container/SellButton'
import { UserContext } from "../../provider/Userprovider";
import "firebase/auth";
import {
  BrowserRouter as Router,
    Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SellButton from "../Container/SellButton";
function AppRoute(){
    
        const user = useContext(UserContext);
        return(
            user ?
            <Router>
                <Switch>
                <Route exact path="/" component={Product}></Route>
                <Route path='/Products' component={Product}></Route>
                <Route path='/Preview/:id' component={Preview}></Route>
                <Route path='/FavList' component={FavList}></Route>
                <Route path='/SellButton' component={SellButton}></Route>
                <Route path="*"><Error/></Route>
                </Switch>
            </Router>            
           :
            <Router>
            <Switch>
                <Route exact path='/' component={Product}></Route>
                <Route path='/Preview/:id' component={Preview}></Route>
                <Route path="*"><Error/></Route>
            </Switch>
            </Router>
        )
}
export default AppRoute