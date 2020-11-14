import React,{useEffect, useState,useContext} from 'react';
import { MdFavorite } from "react-icons/md";
import {UserContext} from '../../provider/Userprovider';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import FavList from '../Container/FavList';
import firebase from 'firebase/app';
import "firebase/storage"
function Ads(){
  const [data,setData] = useState({user:""}) 
  const user = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.database();
      db.ref("Sell_Ads/Users").on("value", function (Snapshot) {
        let allNotes = [];
        Snapshot.forEach(function (snap) {
          allNotes.push(snap.val());
        });
        setData({ user: allNotes })

      });

    };
    fetchData();

  }, []);
  console.log(data.user)
  
  if(user!=null){
    return(
      <div>
           <Main name={user.displayName} photoUrl={user.photoURL}/>
          <div className="container">
          <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex">
                                    <Link to={'/Ads'}><h4>ADS</h4></Link>
                                    <Link to={'/FavList'}><h4 className="ml-4">Favourite</h4></Link>
                                </div>
                            </div>
    
                        </div>
              <div className="row">
              {Object.values(data.user).map((note) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card w-100 card-product mt-3 shadow">
                      <div className="d-flex justify-content-between mt-2 ml-2 mr-2">
                          <div><p className=" badge badge-warning">Feature</p></div>
                          
                          <div>
                          <a className="icons mr-3 "><ion-icon name="share-social-outline"></ion-icon></a>
                          <a className="icons"><MdFavorite size={26} ></MdFavorite></a>
                           </div>
                          
                      </div>
                     
                          <div className="row justify-content-center mx-auto">
                              <img src={note.image1} alt={note.title} className="card-img-top card-img"></img>
      
                          </div>
                          <div className="row mt-3">
                              <h5 className=" ml-4 card-title">{note.price}</h5>
                          </div>
                          <div className="row">
                              <p className="card-subtitle text-muted ml-4">{note.title}</p>
                          </div>
                          <div className="row">
                              <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                      <div><p className="text-capitalize card-text"><small>Location</small></p></div>
                                      <div><p className="text-capitalize card-text"><small>{note.d}</small></p></div>
                                  </div>
                              </div>
                          </div>
                  
                  </div>
              </div>
                );
              })}
               
              </div>
          </div>
          <Footer/>
      </div>
    )
  }
  return(
    <div>
      <Header/>
        <div className="container">
            <div className="row">
            {Object.values(data.user).map((note) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card w-100 card-product mt-3 shadow">
                    <div className="d-flex justify-content-between mt-2 ml-2 mr-2">
                        <div><p className=" badge badge-warning">Feature</p></div>
                        
                        <div>
                        <a className="icons mr-3 "><ion-icon name="share-social-outline"></ion-icon></a>
                        <a className="icons"><MdFavorite size={26} ></MdFavorite></a>
                         </div>
                        
                    </div>
                   
                        <div className="row justify-content-center mx-auto">
                            <img src={note.image1} alt={note.title} className="card-img-top card-img"></img>
    
                        </div>
                        <div className="row mt-3">
                            <h5 className=" ml-4 card-title">{note.price}</h5>
                        </div>
                        <div className="row">
                            <p className="card-subtitle text-muted ml-4">{note.title}</p>
                        </div>
                        <div className="row">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div><p className="text-capitalize card-text"><small>Location</small></p></div>
                                    <div><p className="text-capitalize card-text"><small>{note.d}</small></p></div>
                                </div>
                            </div>
                        </div>
                
                </div>
            </div>
              );
            })}
             
            </div>
        </div>
        <Footer/>
    </div>
  )
  
}
export default Ads