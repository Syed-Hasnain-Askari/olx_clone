import React from 'react'
import './App.css';
export default function Footer() {
    return (
        
        <div className="mt-3" >
        <div className="footer-middle">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                  <h6>POPULAR CATEGORIES</h6>
                  <ul className="list-unstyled">
                    <li><a href="#" /></li>
                    <li><a href="#">Payment Center</a></li>
                    <li><a href="#">Contact Directory</a></li>
                    <li><a href="#">Forms</a></li>
                    <li><a href="#">News and Updates</a></li>
                    <li><a href="#">FAQs</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                  <h6>TRENDING SEARCHES</h6>
                  <ul className="list-unstyled">
                    <li><a href="#">Website Tutorial</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Webmaster</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                  <h6>ABOUT US</h6>
                  <ul className="list-unstyled">
                    <li><a href="#">Parks and Recreation</a></li>
                    <li><a href="#">Public Works</a></li>
                    <li><a href="#">Police Department</a></li>
                    <li><a href="#">Fire</a></li>
                    <li><a href="#">Mayor and City Council</a></li>
                    <li>
                      <a href="#" />
                    </li>
                  </ul>
                </div>
                
              </div>
              <div className="col-md-2 col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                  <h6>OLX</h6>
                  <ul className="list-unstyled">
                    <li><a href="#">Parks and Recreation</a></li>
                    <li><a href="#">Public Works</a></li>
                    <li><a href="#">Police Department</a></li>
                    <li><a href="#">Fire</a></li>
                    <li><a href="#">Mayor and City Council</a></li>
                    <li>
                      <a href="#" />
                    </li>
                  </ul>
                </div>
                
              </div>
              <div className="col-md-2">
                <p>Follow Us</p>
                <ul className="social-network social-circle">
                  <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                </ul>				
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">© Copyright 2018 - Company Name.  All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
