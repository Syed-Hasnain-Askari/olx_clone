import React, { useContext } from "react";
import { UserContext } from "../../provider/Userprovider";
import {auth} from "../../firebase";

export default function Main() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Main Page</h1>
            <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => {auth.signOut()}}>Sign out</button>
        </div>
    )
}
