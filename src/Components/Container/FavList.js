import  React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Data.json';
export default function Addfavorite(){
    var favList = {}
    const getArray = JSON.parse(localStorage.getItem("Data"))
    // for(var i=0;i<getArray.length;i++){
    //     console.log(getArray(i))
    // }
    console.log(getArray)
    return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8 col-sm-12 col-lg-8">
                        <h2>dasdasd</h2>
                        {/* <img src={data.image} className="img-fluid" alt="Responsive image"></img> */}

                    </div>
            </div>
            </div>
    )
}