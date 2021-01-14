import React, { useState,useContext,useEffect} from 'react';
import DashBoard from './DashBoard';
import Data from '../../Data.json';
import { UserContext } from "../../provider/Userprovider";
import Header from './Header';
import Footer from './Footer';
import {useHistory, useHistroy} from 'react-router-dom'
import Card from './Card';
const Product = () => {
    //Push Notification
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/firebase-messaging-sw.js")

      }
    //   const Messaging = firebase.messaging()
    //   Messaging.requestPermission().then(()=>{
    //     return Messaging.getToken()
    // }).then((token)=>{
    //     console.log("Token:",token)
    // }).catch(()=>{
    //     console.log("error")
    // })
    //Push Notification End
    
    const user = useContext(UserContext);
    const [data, setdata] = useState(Data)
    const [name,setName] = useState(user)
    const history = useHistory()
    if(user != null){
        history.push('/')
    }
    return (
        <div>
        <Header/>
        <div className="container">
            <div className="row">
                {Object.keys(data).map((product,key) => (
                    <Card
                        key={key}
                        data={key}
                        name={product}
                        id={data[product].id}
                        image={data[product].image}
                        title={data[product].title}
                        price={data[product].price}
                        location={data[product].location}
                        date={data[product].date}>
                    </Card>

                ))}
            </div>
            
            </div>
            <div className="mt-5">
            <Footer/>
            </div>
            
        </div>   
    )
}
export default Product