import React from 'react'
import './App.css';
import playstore from './images/playstore.webp';
import appstore from './images/appstore.webp';
import {RiFacebookCircleLine} from 'react-icons/ri';
import {TiSocialTwitterCircular} from 'react-icons/ti';
import {BiPlayCircle} from 'react-icons/bi';
import {AiOutlineInstagram} from 'react-icons/ai';

export default function Footer() {
    return (
        
        <div className="mt-3" >
        <div className="footer footer-middle">
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
                <div className="footer footer-pad">
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
                <div className="footer-pad">
                <p>Follow Us</p>
                <ul className="social-network social-circle">
                  <li><a href="#" className="icoFacebook" title="Facebook"><RiFacebookCircleLine size={26}></RiFacebookCircleLine></a></li>
                  <li><a href="#" className="icoLinkedin" title="Linkedin"><TiSocialTwitterCircular size={26}></TiSocialTwitterCircular></a></li>
                  <li><a href="#" className="icoFacebook" title="Facebook"><BiPlayCircle size={26}></BiPlayCircle></a></li>
                  <li><a href="#" className="icoFacebook" title="Facebook"><AiOutlineInstagram size={26}></AiOutlineInstagram></a></li>
                </ul>
                <div className="row mt-5">
                  <div className="col-md-4">
                  <img src={playstore}></img>
                  </div>
                  <div className="col-md-4 ml-5">
                  <img src={appstore}></img>
                  </div>
                </div>				
              </div>
            </div>
            </div>
            <div className=" row botton-footer d-flex justify-content-between">
            
                <div className="ml-3 pt-3"><p><b>Other Countries India</b> - South Africa - Indonesia</p></div>
                <div className="pt-3 mr-3"><p><b>Free Classifieds in Pakistan.</b> © 2006-2020 OLX</p></div>
              
            </div>
          </div>
        </div>
      </div>
    )
}
