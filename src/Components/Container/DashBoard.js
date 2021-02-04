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
    const [product,setProduct] = useState('')
    if(user != null){
    return (
        <div>
        <Main 
            name={user.displayName} 
            photoUrl={user.photoURL}
            handleChange={(e)=>setProduct(e.target.value)}
        />
        <img src={banner} className="img-fluid"></img>
        <div className="container mt-5 mb-0">
            <div className="row">
                {Object.keys(data)
                .filter(val=>{
                    if(product==""){
                      return val
                    }
                  else if(data[val].title.toLowerCase().includes(product.toLowerCase())){
                    return val
                  }
                })
                .map((product,key) => (
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
