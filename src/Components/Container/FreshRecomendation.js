import React from 'react';
function FreshRecomendation(props){
    
    
    return(
        <div className="card card-product mt-3 shadow">
        <div className="d-flex justify-content-between mt-2 ml-2 mr-2">
            <div><p className=" badge badge-warning">Feature</p></div>
            <div><a className="icons"><ion-icon name="heart-outline"></ion-icon></a></div>
        </div>
        <div className="row justify-content-center mx-auto">
            <img src={props.src} alt={props.title} className="card-img-top card-img"></img>
            
        </div>
        <div className="row mt-3">
        <h5 className=" ml-4 card-title">Rs, 100,000</h5>
        </div>
        <div className="row">
        <p className="card-subtitle text-muted ml-4">HeadPhones</p>
        </div>
        <div className="row justify-content-center">
        <div className="d-flex justify-content-between">
        <div><p className="mr-5 text-capitalize"><small>johar town, Lahore</small></p></div>
        <div><p className="ml-5 text-capitalize"><small>Today</small></p></div>
        </div>
        </div>
    </div>
    )
}
export default FreshRecomendation;