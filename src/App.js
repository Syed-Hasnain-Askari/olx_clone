import React, { Component } from 'react';
import AppRoute from './Components/congif/router';
import UserContext from './provider/Userprovider';
import "firebase/auth";
class App extends Component {
    render() {
        return (
            <div>
            <UserContext>
            <AppRoute/>    
            </UserContext>   
            </div>
        )
    }
}
export default App
