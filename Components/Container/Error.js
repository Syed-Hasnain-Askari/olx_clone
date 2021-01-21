import React from 'react'
import errorimage from './error-404.webp';
import Footer from './Footer';
import Header from './Header'

export default function Error() {
    return (
        <div>
            <Header/>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                <img src={errorimage} className="img-fluid"/>
                </div>
            </div>
        </div>
            <Footer/>
        </div>
    )
}
