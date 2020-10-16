import React,{Component} from 'react';
class Product extends Component{
        componentDidMount(){
            fetch("https://rapidapi.p.rapidapi.com/test", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "datagram-products-v1.p.rapidapi.com",
                    "x-rapidapi-key": "SIGN-UP-FOR-KEY"
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => {
                console.error(err);
            });
    }
    render(){
        return(
            <div>
                <h1>dsdasdsdas</h1>
            </div>
        );
    }
}
export default Product;