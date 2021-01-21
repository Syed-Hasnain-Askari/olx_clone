import React, { useState,useContext,useEffect} from 'react';
import { MdFavorite } from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import { Link,useHistory} from 'react-router-dom';
import Modal from 'react-awesome-modal';
import { UserContext } from "../../provider/Userprovider";
import { signInWithGoogle } from '../../firebase'
function Card(props){

    const user = useContext(UserContext);
    const history = useHistory()
    const [userAuth,setUserAuth] = useState(user)
    const [color, setColors] = useState("#333");
    const [active, setActive] = useState(false);
    const [visible,setVisible] = useState(false);
    
    // Run When User Not Login
    const handleClickButtonWhenNotLogin = () => {
        openModal()
    }
    // Run When User Login 
    const handleClickButtonWhenLogin = () =>{
            if (active !== true) {
                setActive(true);
                setColors("red");
            }
        }
   
    const openModal = ()=>{
        setVisible(true)
    }

    const closeModal = ()=> {
        setVisible(false)
    }
    if(userAuth == null)
    {
        return(

        <div className="col-lg-3 col-md-4 col-sm-6">
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

                                <button className="btn btn-lg btn-block btn-outline popup-button text"
                                        onClick={()=>history.push('/Signup')}>
                                Continue with email
                                </button>
                                
                            </div>

                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button ">Continue with facebook</button>
                                
                            </div>
                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button" 
                                onClick={()=>signInWithGoogle()} >
                                Continue with google
                                </button>
                                
                            </div>
                
                            <div className="row mx-auto mb-2 d-flex justify-content-center">
                            <p className="text-muted"><small>We won't share your personal details with anyone</small></p>
                            <p className="text-muted text-center mt-0 pt-0"><small>If you continue, you are accepting <span className="text-primary">OLX Terms</span></small></p>
                            <p className="text-center text-primary mt-0  pt-0"><small>and Conditions</small></p>
                            </div>
                           
                        </div>
                    </Modal>
            <div className="card w-100 card-product mt-3 shadow">
                <div className="d-flex justify-content-between mt-2 ml-2 mr-2">
                    <div><p className=" badge badge-warning">Feature</p></div>
                    <div><a className="icons" onClick={() => handleClickButtonWhenNotLogin()}><MdFavorite size={26} color={color}></MdFavorite></a></div>
                </div>
                <Link to={`/Preview/${props.name}`}>
                    <div className="row justify-content-center mx-auto">
                        <img src={props.image} alt={props.title} className="card-img-top card-img"></img>

                    </div>
                    <div className="row mt-3">
                        <h5 className=" ml-4 card-title">{props.price}</h5>
                    </div>
                    <div className="row">
                        <p className="card-subtitle text-muted ml-4">{props.title}</p>
                    </div>
                    <div className="row">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div><p className="text-capitalize card-text"><small>{props.location}</small></p></div>
                                <div><p className="text-capitalize card-text"><small>{props.date}</small></p></div>
                            </div>
                        </div>
                    </div>
                    </Link>
            </div>
        </div>
        )}
        return (
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card w-100 card-product mt-3 shadow">
                    <div className="d-flex justify-content-between mt-2 ml-2 mr-2">
                        <div><p className=" badge badge-warning">Feature</p></div>
                        
                        <div>
                        <a className="icons mr-3 "><ion-icon name="share-social-outline"></ion-icon></a>
                        <a className="icons"><MdFavorite onClick={() => handleClickButtonWhenLogin()} size={26} color={color}></MdFavorite></a>
                         </div>
                        
                    </div>
                    <Link to={`/Preview/${props.name}`}>
                        <div className="row justify-content-center mx-auto">
                            <img src={props.image} alt={props.title} className="card-img-top card-img"></img>
    
                        </div>
                        <div className="row mt-3">
                            <h5 className=" ml-4 card-title">{props.price}</h5>
                        </div>
                        <div className="row">
                            <p className="card-subtitle text-muted ml-4">{props.title}</p>
                        </div>
                        <div className="row">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div><p className="text-capitalize card-text"><small>{props.location}</small></p></div>
                                    <div><p className="text-capitalize card-text"><small>{props.date}</small></p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
}   
export default Card