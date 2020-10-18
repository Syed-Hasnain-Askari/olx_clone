import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '../../Data.json';
class Product extends Component {
    constructor() {
        super()
        this.state = {
            product: Data
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {Object.keys(this.state.product).map(items => (
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link to={`/Preview/${items}`}>
                                <div className="card w-100 card-product mt-3 shadow" key={items}>
                                    <div className="d-flex justify-content-between mt-2 ml-2 mr-2">
                                        <div><p className=" badge badge-warning">Feature</p></div>
                                        <div><a className="icons"><ion-icon name="heart-outline"></ion-icon></a></div>
                                    </div>
                                    <div className="row justify-content-center mx-auto">
                                        <img src={Data[items].image} alt={Data[items].title} className="card-img-top card-img"></img>

                                    </div>
                                    <div className="row mt-3">
                                        <h5 className=" ml-4 card-title">{Data[items].price}</h5>
                                    </div>
                                    <div className="row">
                                        <p className="card-subtitle text-muted ml-4">{Data[items].title}</p>
                                    </div>
                                    <div className="row">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div><p className="text-capitalize card-text"><small>{Data[items].location}</small></p></div>
                                                <div><p className="text-capitalize card-text"><small>{Data[items].date}</small></p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    ))}
                </div>
            </div>
        )
    }
}
export default Product