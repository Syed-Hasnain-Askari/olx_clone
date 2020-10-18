import React from 'react';
import Header from './Header';
import avatar from './images/avatar.png';
import { useParams } from 'react-router-dom';
import Data from '../../Data.json';

export default function Preview(props) {
    const { id } = useParams()
    const data = Data[id]
    if (!data) {
        return <h1>Not Found</h1>
    }
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
                                    <h2 class="card-title ml-3 mt-4">Rs.{data.price}</h2>
                                    <h6 class="card-subtitle ml-3 mb-2 text-muted">{data.title}</h6>

                                </div>

                                <div>
                                    <a className="icons mr-3 "><ion-icon name="share-social-outline"></ion-icon></a>
                                    <a className="icons mr-3 "><ion-icon name="heart-outline"></ion-icon></a>
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
