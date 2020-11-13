import React,{Component} from 'react';
import {db,auth} from '../../firebase';
import firebase from 'firebase/app';
import "firebase/storage"
class FetchData extends Component{
    constructor(){
        super()
        this.state = {
            users: [],
            name:"",
            lname:"",
            price:"",
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
        const { name,lname,price } = this.state;
        // const ID = this.state.users.ID;
        firebase.database().ref('Sell_Ad/Users').push()
        .set({
          name,
          lname,
          price
        })
        .then(_ => {
          this.setState({ name: "",lname:"",price:"" });
        });
    }
      
    // componentDidMount(){
    //     var ref = firebase.database().ref().child("Sell_Ad/Users")
    //     let userData = []
    //     ref.on("child_added",snap=>{
    //         let name = snap.child("name").val()
    //         let lname = snap.child("lname").val()
    //         let price = snap.child("price").val()
    //         userData.push(name,lname,price)
    //     })
    //     this.setState({ users: usrer });

    // }
    componentDidMount() {
        firebase.database().ref("Sell_Ad").on("child_added", snapshot => {
          let allNotes = [];
          snapshot.forEach(snap => {
            allNotes.push(snap.child("name").val());
          });
          this.setState({ users: allNotes });
          console.log(this.state.users)
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
            {this.state.users.map((note,key) => {
            return (
                <div key={key}>
                <h1>{note.name}</h1>
                </div>
            );
            })}
                
          </div>
      )
  
    }
}
export default FetchData