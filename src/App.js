import React, { Component } from 'react';
import AppRoute from './Components/congif/router';
import UserProvider from "./provider/Userprovider"
import "firebase/auth";
function App()  {
   
        return (
            <div>
            <UserProvider>
            <AppRoute/>    
            </UserProvider>   
            </div>
        
        )
}
export default App
