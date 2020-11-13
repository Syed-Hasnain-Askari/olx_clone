import React, {useContext } from "react";
import Product from '../Container/Products';
import Preview from '../Container/Preview';
import FavList from '../Container/FavList'
import Error from '../Container/Error';
import SellButton from '../Container/SellButton';
import FetchData from '../Container/FetchData';
import { UserContext } from "../../provider/Userprovider";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
function AppRoute(){
    
        const user = useContext(UserContext);
        return(
            user ?
            <Router>
                <Switch>
                <Route exact path="/" component={Product}></Route>
                {/* <Route path='/Products' component={Product}></Route> */}
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
                <Route path='/FetchData' component={FetchData}></Route>
                <Route path="*"><Error/></Route>
            </Switch>
            </Router>
        )
}
export default AppRoute