import React, { useState,useContext} from 'react';
import { MdFavorite } from "react-icons/md";
import { Link} from 'react-router-dom';
import Modal from 'react-awesome-modal';
import Data from '../../Data.json';
import { UserContext } from "../../provider/Userprovider";
import { signInWithGoogle } from '../../firebase'
import Header from './Header';
import Main from './Main';
const Cards = (props) => {

    var products = JSON.parse(localStorage.getItem('Data') || '[]')
    const user = useContext(UserContext);

    const [userAuth,setUserAuth] = useState(user)
    const [color, setColors] = useState("#333");
    const [active, setActive] = useState(false);
    const [visible,setVisible] = useState(false);
    const [productData,setProductData] = useState([products]);
    
    // Run When User Not Login
    const handleClickButtonWhenNotLogin = () => {
        openModal()
    }
    // Run When User Login 
    const handleClickButtonWhenLogin = () =>{
            if (active !== true) {
                setActive(true);
                setColors("red");
                // Push the values in products varable
                products.push(props.data)

                // set the products values in String from
                localStorage.setItem("Data", JSON.stringify(products)) 
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
              <Modal visible={visible} width="400" height="584" effect="fadeInUp" onClickAway={() => closeModal()}>
                        <div className="mt-5 p-3 popup_wrapper">


                            <div className="row mx-auto mb-2">

                                <button className="btn btn-lg btn-block btn-outline popup-button text">Continue with phone</button>

                            </div>

                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button ">Continue with facebook</button>
                                
                            </div>
                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button" onClick={()=>signInWithGoogle()}>Continue with google</button>
                                
                            </div>
                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button">Continue with email</button>
                                
                            </div>

                            <a href="javascript:void(0);" onClick={() => closeModal()}>Close</a>
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
const Product = () => {
    const user = useContext(UserContext);
    const [data, setdata] = useState(Data)
    const [name,setName] = useState(user)
    if(user != null){   
    return (
        <div>
        <Main name={user.displayName} photoUrl={user.photoURL}/>
        <div className="container">
            <div className="row">
                {Object.keys(data).map((product,key) => (
                    <Cards
                        key={key}
                        data={key}
                        name={product}
                        id={data[product].id}
                        image={data[product].image}
                        title={data[product].title}
                        price={data[product].price}
                        location={data[product].location}
                        date={data[product].date}>
                    </Cards>

                ))}
            </div>
            </div>
        </div>
    )}
    return (
        <div>
        <Header/>
        <div className="container">
            <div className="row">
                {Object.keys(data).map((product,key) => (
                    <Cards
                        key={key}
                        data={key}
                        name={product}
                        id={data[product].id}
                        image={data[product].image}
                        title={data[product].title}
                        price={data[product].price}
                        location={data[product].location}
                        date={data[product].date}>
                    </Cards>

                ))}
            </div>
            </div>
        </div>
    )
}
export default Product