import React,{useState,useContext} from 'react';
import Main from './Main';
import Footer from './Footer';
import Card from './Card';
import {UserContext} from "../../provider/Userprovider";
import {banner} from "./images/olx_banner.jpg";
import Data from '../../Data.json';
function DashBoard() {
    const user = useContext(UserContext);
    const [data, setdata] = useState(Data)
    const [name,setName] = useState(user)
    if(user != null){
    return (
        <div>
        <Main name={user.displayName} photoUrl={user.photoURL}/>
        <img src={banner} className="img-fluid"></img>
        <div className="container mt-5 mb-0">
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
            <Footer/>
        </div>
    )}
}
export default DashBoard
