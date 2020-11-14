import React, { useState,useContext} from 'react';
import {UserContext} from '../../provider/Userprovider';
import {MdFavorite} from "react-icons/md";
import {Link} from 'react-router-dom';
import Main from '../Container/Main';
import Footer from '../Container/Footer';

function FavList(props){
    
    const [color,setColor] = useState("red")
    const [active,setActive] = useState(false) 
    var documentData = JSON.parse(localStorage.getItem('Data'))  
        // This function remove the FavList Items
        const RemoveItems = () =>{
            setColor("red")
            setActive(true)
                var productItem = JSON.parse(localStorage.getItem('Data'));
                var index = productItem.map(function(element) {
                return element.id;
                }).indexOf(documentData.id);
                productItem.splice(index, 1);
                localStorage.setItem('Data', JSON.stringify(productItem));

        }
        const user = useContext(UserContext)
        if(user!=null){
            return (
                <div>      
                    <Main  name={user.displayName} photoUrl={user.photoURL}/>   
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex">
                                    <Link to={'/Ads'}><h4>ADS</h4></Link>
                                    <Link to={'/FavList'}><h4 className="ml-4">Favourite</h4></Link>
                                </div>
                            </div>
    
                        </div>
                        <div className="row">
                        {documentData.map(element=>(
                    
                    <div className="col-md-4">
                        <div className="card w-100 card-product mt-3 shadow">
                            <div className="d-flex justify-content-between mt-2 ml-2 mr-2">
                                <div><p className=" badge badge-warning">Feature</p></div>
                                <div><a className="icons" onClick={() => RemoveItems()} ><MdFavorite name="heart-outline" size={26} value={documentData} color={"red"}></MdFavorite></a></div>
                            </div>
                            <div className="row justify-content-center mx-auto">
                                <img src={element.image} alt={element.title} className="card-img-top card-img"></img>
    
                            </div>
                            <div className="row mt-3">
                                <h5 className=" ml-4 card-title">{element.price}</h5>
                            </div>
                            <div className="row">
                                <p className="card-subtitle text-muted ml-4">{element.title}</p>
                            </div>
                            <div className="row">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div><p className="text-capitalize card-text"><small>{element.location}</small></p></div>
                                        <div><p className="text-capitalize card-text"><small>{element.date}</small></p></div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                
                
                        ))}
                        </div>
                        
                    </div>
                            <Footer/>
                </div>
    )
        }
       }
export default FavList