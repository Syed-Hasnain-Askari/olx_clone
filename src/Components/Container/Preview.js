import React, { useState,useContext } from 'react';
import { UserContext } from "../../provider/Userprovider";
import Header from './Header';
import Footer from './Footer';
import { MdFavorite } from "react-icons/md"
import {AiOutlineClose} from 'react-icons/ai'
import avatar from './images/avatar.png';
import { useParams } from 'react-router-dom';
import Data from '../../Data.json';
import Main from './Main';
import Modal from 'react-awesome-modal';
import { signInWithGoogle } from '../../firebase';

export default function Preview() {
    const [color, setColors] = useState("#333");
    const [active, setActive] = useState(false);
    const [visible,setVisible] = useState(false);
    const [UserData, setUserdata] = useState([Data]);
    const user = useContext(UserContext);

    const openModal = ()=>{
        setVisible(true)
    }

    const closeModal = ()=> {
        setVisible(false)
    }

    var products = JSON.parse(localStorage.getItem('Data') || '[]')
     
    // Run When User Not Login
     const handleClickButtonWhenNotLogin = () => {
        openModal()
    }
    const handleClickButtonWhenLogin = () => {
        if (active !== true) {
            setActive(true);
            setColors("red");

            // Push the values in products varable
            products.push(data)

            // set the products values in String from
            localStorage.setItem("Data", JSON.stringify(products))
        }
        if (active == true) {
            setActive(false);
            setColors("#333");
            RemoveItems()

        }
    }
    const RemoveItems = () =>{
        var productItem = JSON.parse(localStorage.getItem('Data'));
        var index = productItem.map(function(element) {
        return element.id;
        }).indexOf(data.id);
        productItem.splice(index, 1);
        localStorage.setItem('Data', JSON.stringify(productItem));
    }
    // get Id from the Object.key function 
    const { id } = useParams()
    // Retive Data from Data.Json file base on thier ID
    const data = Data[id]
    if (!data) {
        return <h1>Not Found</h1>
    }
    if(user != null){
        return (
            <div>
                <Main name={user.displayName} photoUrl={user.photoURL}/>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-8 col-sm-12 col-lg-8">
                            <img src={data.image} className="img-fluid" alt="Responsive image"></img>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card mb-2">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h2 className="card-title ml-3 mt-4">Rs.{data.price}</h2>
                                        <h6 className="card-subtitle ml-3 mb-2 text-muted">{data.title}</h6>
    
                                    </div>
    
                                    <div>
                                        <a className="icons mr-3 "><ion-icon name="share-social-outline"></ion-icon></a>
                                        <a className="icons mr-3" data-toggle="tooltip" data-placement="bottom" title="Favourite"><MdFavorite size={26} color={color} onClick={() => handleClickButtonWhenLogin()}></MdFavorite></a>
                                    </div>
    
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div><p className="text-capitalize card-text text-muted"><small>{data.location}</small></p></div>
                                        <div><p className="text-capitalize card-text text-muted"><small>{data.date}</small></p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <h2 className="card-title ml-3 mt-4">Seller Description</h2>
                                <div className="media ml-3">
                                    <img src={avatar} className="mr-3 rounded-circle avatar " alt="..."></img>
                                    <div className="media-body">
                                        <h5 className="mt-0">Syed Hasnain Askari</h5>
                                        <p className="text-capitalize card-text text-muted"><small>Member since jun 2020</small></p>
    
                                    </div>
                                </div>
                                <button className="btn btn-primary  mx-5 mt-3">Chat with seller</button>
                            </div>
    
                        </div>
    
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    return(
        <div>
            <Header/>
            <Modal
                        visible={visible}
                        width="400"
                        height="584"
                        effect="fadeInUp"
                        onClickAway={() =>closeModal()}
                    >
                        <div className="p-3 popup_wrapper">
                        <a href="javascript:void(0);" onClick={() =>closeModal()} className="d-flex justify-content-end"><AiOutlineClose size={40}></AiOutlineClose></a>
                            <div className="row mx-auto mb-2 mt-5">

                                <button className="btn btn-lg btn-block btn-outline popup-button text">Continue with phone</button>
                                
                            </div>

                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button ">Continue with facebook</button>
                                
                            </div>
                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button" onClick={()=>signInWithGoogle()} >Continue with google</button>
                                
                            </div>
                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button">Continue with email</button>
                                
                            </div>

                            <div className="row mx-auto mb-2 d-flex justify-content-center">
                            <p className="text-muted"><small>We won't share your personal details with anyone</small></p>
                            <p className="text-muted text-center mt-0 pt-0"><small>If you continue, you are accepting <span className="text-primary">OLX Terms</span></small></p>
                            <p className="text-center text-primary mt-0  pt-0"><small>and Conditions</small></p>
                            </div>
                           
                        </div>
                    </Modal>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8 col-sm-12 col-lg-8">
                        <img src={data.image} className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card mb-2">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h2 className="card-title ml-3 mt-4">Rs.{data.price}</h2>
                                    <h6 className="card-subtitle ml-3 mb-2 text-muted">{data.title}</h6>

                                </div>

                                <div>
                                    <a className="icons mr-3 "><ion-icon name="share-social-outline"></ion-icon></a>
                                    <a className="icons mr-3" data-toggle="tooltip" data-placement="bottom" title="Favourite"><MdFavorite size={26} color={color} onClick={() => handleClickButtonWhenNotLogin()}></MdFavorite></a>
                                </div>

                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div><p className="text-capitalize card-text text-muted"><small>{data.location}</small></p></div>
                                    <div><p className="text-capitalize card-text text-muted"><small>{data.date}</small></p></div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h2 className="card-title ml-3 mt-4">Seller Description</h2>
                            <div className="media ml-3">
                                <img src={avatar} className="mr-3 rounded-circle avatar " alt="..."></img>
                                <div className="media-body">
                                    <h5 className="mt-0">Syed Hasnain Askari</h5>
                                    <p className="text-capitalize card-text text-muted"><small>Member since jun 2020</small></p>

                                </div>
                            </div>
                            <button className="btn btn-primary  mx-5 mt-3">Chat with seller</button>
                        </div>

                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )

}