import React, { useState } from 'react';
import avatar from './images/avatar.png'
import logo from './images/logo.webp';
import {AiOutlineArrowLeft} from 'react-icons/ai'
export default function Example() {

    const [image,setImage] = useState({
      profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    })
    const imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readyState === 2){
          setImage({profileImg: reader.result})
        }
      }
      reader.readAsDataURL(e.target.files[0])
    };
    const [data,setData] = useState({})
    const click = ()=>{
      const price = document.getElementById("price").value
      const name = document.getElementById("name").value
      const lname = document.getElementById("lname").value
      setData({
        price:price,
        name:name,
        lname:lname,
      })
      console.log(price)
      console.log(name)
      console.log(lname)
    }
    return (
        <div>
          
        <nav class="navbar navbar-light bg-light">
          <a  href="#" className="navbar-brand ml-4">
            <AiOutlineArrowLeft size={26}/>
            <img src={logo} className="img-thumbnil logo ml-4"></img>
          </a>
        </nav>
          <div className="container">
            <h1 className="text-center">Post Your AD</h1>
        <div className="card mt-5 ml-5" style={{width:"60rem",height:"1900px"}}>
        <div className="card-body">
    <h5 className="card-title">SELECTED CATEGORY</h5>
    <h6 className="card-subtitle mb-2 text-muted mt-4">Vehicles/Cars<span className="ml-4 text-dark">Change</span></h6>
    <hr/>
    <h5 className="card-title">INCLUED SOME DETAILS</h5>
    <p className="card-text">Conditions *</p>
    <button type="button" className="btn btn-light">New</button>
    <button type="button" className="btn btn-light ml-3">Used</button>
    <p className="card-text">Type *</p>
    <button type="button" className="btn btn-light">Apple</button>
    <button type="button" className="btn btn-light">Q-Mobile</button>
    <div className="needs-validation mt-3" novalidate>
      <div className="row">
        <div className="col-md-6">
        <p className="card-text mt-4">Ad Title</p>
         <input type="text" class="form-control form-control-lg border border-secondary" id="name" required></input>
      <div class="valid-feedback">
        Looks good!
      </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        <p className="card-text mt-4">Description</p>
    <textarea class="form-control border border-secondary" required></textarea>
      <div class="valid-feedback">
        Looks good!
      </div>
        </div>
      </div>
    </div>
    <div className="needs-validation" novalidate>
    <p className="card-text">First name</p>
    <input type="text" class="form-control form-control-lg" id="name" required></input>
      <div class="valid-feedback">
        Looks good!
      </div>
      <p className="card-text">Last name</p>
    <input type="text" class="form-control form-control-lg" id="lname" required></input>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  <hr/>
  <h5 className="card-title mt-4">SET PRICE</h5>
  <p><small>Price</small></p>
  <input type="text" class="form-control form-control-lg d-inline-block" id="price" placeholder="Username"></input>
  <hr/>
  <h5 className="card-title mt-5">Upload upto 12 Photos</h5>
  <div className="row">
    <div className="col-md-3">
      <div className="card" style={{width:"160px",height:"130px"}}>
     <a onChange={()=>imageHandler()} type="file"><img src={image.profileImg} className="img-fluid"></img></a>
     </div>
    </div>
    <div className="col-md-3">
      <div className="card" style={{width:"160px",height:"130px"}}>
     <a onChange={()=>imageHandler()} type="file"><img src={image.profileImg} className="img-fluid"></img></a>
     </div>
    </div>
    <div className="col-md-3">
      <div className="card" style={{width:"160px",height:"130px"}}>
     <a onChange={()=>imageHandler()} type="file"><img src={image.profileImg} className="img-fluid"></img></a>
     </div>
    </div>
  </div>
  
  <hr/>
  <h5 className="card-title mt-5"><b></b>CONFIRM YOUR LOCATION</h5>
  <div className="row d-flex">
    <div className="col">
    <label className="ml-auto"><h6>List</h6></label>
    <label className=" font-smaller ml-5" ><h6>Current Location</h6></label>
    </div>
  </div>
  
  <p className="card-text text-muted">State</p>
  <select class="form-control form-control-lg">
  <option>Azad Kashmir</option>
  <option>Balochistan</option>
  <option>Sindh</option>
  <option>Punjab</option>
  <option>KPK</option>
</select>
<hr/>
        <h5 className="card-title mt-5">REVIEW YOUR DETAIL</h5>
        <div className="row ml-4">
        <div className="media">
        <img src={avatar} className="mr-3 rounded-circle" alt="..." style={{width:"100px",height:"100px"}}/>
        <div className="media-body">
        <p className="mt-0 pb-0">Name</p>
        <input type="text" class="form-control form-control-lg" value="Hasnain"></input>
      </div>
        </div>
        </div>
        <div className="row">
          <div className="col-md-6">
           <h6 className="card-title mt-4">Let's verify your account</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="text">We will send you a confirmation code by sms on the next step.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Mobile Phone Number</label>
            <input type="text" class="form-control form-control-lg" value="Hasnain"></input>
          </div>
        </div>
<hr/>
  <button className="btn btn-outline-info mt-4 ml-3" onClick={()=>click()}>Post now</button>
    </div>
  </div>
</div>

        </div>
       
    );
}