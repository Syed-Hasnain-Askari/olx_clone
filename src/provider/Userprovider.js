import React, { useState, createContext,useEffect } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();
function UserProvider(props) {

  const [currentUser,setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged( userAuth => {
      userAuth
      ?setCurrentUser(userAuth)
      :setCurrentUser(null)
    })
  },[])
    return (
      <UserContext.Provider value={currentUser}>
        {props.children}
      </UserContext.Provider>
    );
}
export default UserProvider;