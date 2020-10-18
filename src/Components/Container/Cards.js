import React, { Component } from 'react';
import FreshRecomendation from './FreshRecomendation';
import watch from './images/watch.jpg';
import product1 from './images/product1.jpg';
import glasses from './images/glasses.jpg';
import bicycle from './images/bicycle.jpg';
import ipod from './images/ipod.jpg';
import nike from './images/nike.jpg';
import camera from './images/camera.jpg';
import lense from './images/lense.jpg';
class Card extends Component{
    render(){
        return(
            <div className="container">
                <div className="row ml-1"><h2>Fresh FreshRecomendation</h2></div>
                <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <FreshRecomendation src={watch}/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                    <FreshRecomendation src={product1}/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                    <FreshRecomendation src={glasses}/>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-sm-6">
                    <FreshRecomendation src={bicycle}/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <FreshRecomendation src={ipod}/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <FreshRecomendation src={nike}/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <FreshRecomendation src={camera}/>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xm-6">
                    <FreshRecomendation src={lense} />
                    </div>
                </div>
                </div>
            
        );
    }
   
}
export default Card