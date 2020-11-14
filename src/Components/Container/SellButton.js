import React, { useState,useContext,useEffect } from 'react';
import firebase from 'firebase'
import 'firebase/storage'
import {UserContext} from '../../provider/Userprovider';
import logo from './images/logo.webp';
import addImage from './images/addimage.png';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {FiCamera} from 'react-icons/fi';
function SellButton() {
      const user = useContext(UserContext)
      const [image1,setImage1] = useState(addImage)
      const [image2,setImage2] = useState(addImage)
      const [data,setData] = useState({user:""})
      const [name,setName] = useState("")
      const [lname,setLastName] = useState("")
      const [price,setPrice] = useState("")
      
      useEffect( () => {
        const fetchData = async () => {
          const db = firebase.database();
           db.ref("Sell_Ads/Users").on("value",function(Snapshot) {
            let allNotes = [];
            Snapshot.forEach(function(snap) {
              allNotes.push(snap.val());
            });
            setData({user:allNotes})
            
        });
      
        };
        fetchData();
        
      }, []);
      console.log(data.user)

      const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState == 2){
            setImage1(reader.result)
          }
        }
        reader.readAsDataURL(e.target.files[0])
     }
  //    const nameHandleChange = (e)=> {
  //     setName({
  //         name: e.target.value,
  //       });
  // }
  // const lastnameHandleChange = (e)=> {
  //     setLastName({
  //         lname: e.target.value,
  //       });
  // }
  // const priceHandleChange = (e)=> {
  //     setPrice({
  //         price: e.target.value,
  //       });
  
  const createNote = ()=> {
        
    const d = new Date().toDateString()
    firebase.database().ref("Sell_Ads/Users").push()
    .set({
      name,
      lname,
      price,
      d,
    })
    .then(_ => {
      setName("")
      setLastName("")
      setPrice("")
    });
}
     const upload=(files)=>{const file = files[0];
    
      var uploadTask = firebase.storage().ref().child(`images/${file.name}`).put(file);
      uploadTask.on('state_changed', function(snapshot){
      
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {
        // Handle unsuccessful uploads
      }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
          setImage1(downloadURL)
        });
      });
      
  }
    
      const imageHandler1 = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState == 2){
            setImage1(reader.result)
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };
      // const UploadFile = (e)=>{
      //   console.log(setFile({File:e.target.files[0]}))
      //   // var ref = firebase.storage().ref().child(`images/${file.File.name}`).put(file.File);
      // }
  
     

      if(user!=null){
        const name = user.displayName
        const photoUrl = user.photoURL
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
    <button type="button" className="btn btn-light border border-secondary">New</button>
    <button type="button" className="btn btn-light border border-secondary ml-3">Used</button>
    <p className="card-text">Type *</p>
    <button type="button" className="btn btn-light border border-secondary">Apple</button>
    <button type="button" className="btn btn-light border border-secondary ml-3">Q-Mobile</button>
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
    <input type="text" class="form-control form-control-lg" id="name" onChange={(e)=>setName(e.target.value)} required></input>
      <div class="valid-feedback">
        Looks good!
      </div>
      <p className="card-text">Last name</p>
    <input type="text" class="form-control form-control-lg" id="lname" onChange={(e)=>setLastName(e.target.value)} required></input>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  <hr/>
  <h5 className="card-title mt-4">SET PRICE</h5>
  <p><small>Price</small></p>
  <input type="text" class="form-control form-control-lg d-inline-block" id="price" onChange={(e)=>setPrice(e.target.value)} placeholder="Username"></input>
  <hr/>
  <h5 className="card-title mt-5">Upload upto 12 Photos</h5>
  <div className="row">
  <div className="col-md-3">
  
    <label htmlFor="input1"> <img src={image1} className="img-fluid" style={{width:"150px",height:"150px"}}></img></label>
     
     <input type="file" id="input1" style={{display:"none"}} className="form-control-file mb-3" accept="image/*"
      onInput={(e)=> {upload(e.target.files)}} onChange={imageHandler}></input>
     {/*  */}
    </div>
    <div className="col-md-3">
    
    <label htmlFor="input2"> <img src={image2} className="img-fluid" style={{width:"150px",height:"150px"}}></img></label>
     
     <input type="file" id="input2" style={{display:"none"}} className="form-control-file mb-3" accept="image/*" onChange={imageHandler1}></input>
    </div>
    <div className="col-md-3">
    
    <label htmlFor="input3"> <img src="..." className="img-fluid" style={{width:"160px",height:"150px"}}></img></label>
     
     <input type="file" id="input3" style={{display:"none"}} className="form-control-file mb-3" accept="image/*" onChange={imageHandler}></input>
    </div>
    <div className="col-md-3">
    
    <label htmlFor="input4"> <img src="..." className="img-fluid" style={{width:"160px",height:"150px"}}></img></label>
     
     <input type="file" id="input4" style={{display:"none"}} className="form-control-file mb-3" accept="image/*" onChange={imageHandler}></input>
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
        <img src={photoUrl} className="mr-3 rounded-circle" alt="..." style={{width:"100px",height:"100px"}}/>
        <div className="media-body">
        <p className="mt-0 pb-0 font-weight-normal mb0">Name</p>
      <input type="text" class="form-control-lg text-dark border border-secondary mb0" value={name}  ></input>
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
  <button className="btn btn-outline-info mt-4 ml-3" onClick={()=>createNote()} >Post now</button>
    </div>
  </div>
</div>
</div>
       
  )};
}
export default SellButton