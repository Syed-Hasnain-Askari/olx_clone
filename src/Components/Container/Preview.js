import React, { useState } from 'react';
import Header from './Header';
import { MdFavorite } from "react-icons/md"
import avatar from './images/avatar.png';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Data from '../../Data.json';

export default function Preview() {
    const [color, setColors] = useState("#333");
    const [active, setActive] = useState(false);
    const [UserData, setUserdata] = useState({});
    // let history = useHistory();

    // get Id from the Object.key function 
    const { id } = useParams()
    // Retive Data from Data.Json file base on thier ID
    const data = Data[id]
    console.log(data)
    if (!data) {
        return <h1>Not Found</h1>
    }
    if (typeof (localStorage.getItem("Data")) == null) {
        console.log("null")
    }
    else {
        console.group("Full")
    }
    // read what the Product value currently is  
    // var products = JSON.parse(localStorage.getItem('Data') || '[]')

    var products = JSON.parse(localStorage.getItem('Data') || '[]')

    const RemoveItems = () => {
        var productItem = JSON.parse(localStorage.getItem('Data'));
        var index = productItem.map(function (element) {
            return element.id;
        }).indexOf(products.id);
        productItem.splice(index, 1);
        localStorage.setItem('Data', JSON.stringify(productItem));

    }
    
    const handleClickButton = () => {
        setActive(true);
        setColors("red");

        // Push the values in products varable
        products.push(data)
        setUserdata(

            // set the products values in String from
            localStorage.setItem("Data", JSON.stringify(products))

        )
        if (active === true) {
            setActive(false);
            setColors("#333");
            RemoveItems()

        }
        // else if(active!=true){
        //        RemoveItems()
        //        setColors("#333");
        // }
    };
    return (
        <div>
            <Header />
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
                                    <a className="icons mr-3" data-toggle="tooltip" data-placement="bottom" title="Favourite" onClick={() => handleClickButton()} ><MdFavorite size={26} color={color}></MdFavorite></a>
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
        </div>
    )

}
