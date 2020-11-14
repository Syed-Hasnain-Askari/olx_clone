import React,{Component,useEffect, useState} from 'react';
import {db,auth} from '../../firebase';
import firebase from 'firebase/app';
import "firebase/storage"
function Retrive(){
  const [data,Set_User_Data] = useState({user:[]}) 
  return(
    <div>
      <h1>hey</h1>
      {data.map(note => {
  return (
    <div key={note.name}>
      {note[0].name}
    </div>
  );
})}
    </div>
  )
}


class FetchData extends Component{
    constructor(){
        super()
        this.state = {
            user: [],
            name:"",
            lname:"",
            
        }
        this.nameHandleChange = this.nameHandleChange.bind(this);
        this.lastnameHandleChange = this.lastnameHandleChange.bind(this);
        this.priceHandleChange = this.priceHandleChange.bind(this);
        this.createNote = this.createNote.bind(this); 

    }

    nameHandleChange(e) {
        this.setState({
            name: e.target.value,
          });
    }
    lastnameHandleChange(e) {
        this.setState({
            lname: e.target.value,
          });
    }
    priceHandleChange(e) {
        this.setState({
            price: e.target.value,
          });
    }


    createNote() {
        
        const { name,lname } = this.state;
        const d = new Date().toDateString()
        firebase.database().ref("Sell_Ads/Users").push()
        .set({
          name,
          lname,
          d,
        })
        .then(_ => {
          this.setState({ name: "",lname:"",price:"" });
        });
    }
      
    componentDidMount() {
        firebase.database().ref("Sell_Ads/Users").on("value", (snapshot,prevChildKey) => {
          let allNotes = [];
          snapshot.forEach(snap => {
            allNotes.push(snap.val());
          });
          this.setState({ user:allNotes });
          console.log(this.state.user)
        });
    }
    
    render(){
      return(
          <div>
                <input
                onChange={this.nameHandleChange}
                value={this.state.name}
                placeholder="First Name"
                />
                <input
                onChange={this.lastnameHandleChange}
                value={this.state.lname}
                placeholder="Last Name"
                />
                <input
                onChange={this.priceHandleChange}
                value={this.state.price}
                placeholder="Price"
                />
            <button className="btn btn-primary" onClick={this.createNote} >Click</button>
            {Object.values(this.state.user).map((note) => {
              return (
                <div>
                  {note.name}
                  {note.lname}
                  {note.d}
                </div>
              );
            })}
             
              
          </div>
      )
  
    }
}
export default FetchData