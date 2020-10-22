import React, { Component } from 'react';
import Header from './Header';
import {MdFavorite} from "react-icons/md"

export default class FavList extends Component {

    render() {
        this.documentData = JSON.parse(localStorage.getItem('Data'))
        return (
            <div>
                    
                <Header />   
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex">
                                <h4>ADS</h4>
                                <h4 className="ml-4">Favourite</h4>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                    {this.documentData.map(element=>{
                        return(
                            <div className="col-md-4">
                                <div className="card w-100 card-product mt-3 shadow">
                                    <div className="d-flex justify-content-between mt-2 ml-2 mr-2">
                                        <div><p className=" badge badge-warning">Feature</p></div>
                                        <div><a className="icons"><MdFavorite name="heart-outline" size={26}></MdFavorite></a></div>
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
                        
                        )
                        })} 
                    </div>
                    
                </div>

            </div>
        )
    }
}