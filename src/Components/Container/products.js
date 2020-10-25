import React, { useState } from 'react';
import { MdFavorite } from "react-icons/md"
import { Link } from 'react-router-dom';
import Data from '../../Data.json';
const Cards = (props) => {
    const [color, setColors] = useState("#333");
    const [active, setActive] = useState(false);
    const handleClickButton = () => {
        setActive(true);
        setColors("red");
        if (active === true) {
            setActive(false);
            setColors("#333");
        }
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">

            <div className="card w-100 card-product mt-3 shadow" key={props.key}>
                <div className="d-flex justify-content-between mt-2 ml-2 mr-2">
                    <div><p className=" badge badge-warning">Feature</p></div>
                    <div><a className="icons" onClick={() => handleClickButton()}><MdFavorite size={26} color={color}></MdFavorite></a></div>
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
};
const Product = () => {
    const [data, setdata] = useState(Data)
    return (
        <div className="container">
            <div className="row">
                {Object.keys(data).map((product) => (
                    <Cards
                        name={product}
                        key={data[product]}
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
    )
}
export default Product