import React, { Component } from 'react'

 class Contact extends Component {
     //declaration state
     state = {
      age:15,

      user:{
          name:"mehdi",
          lastname:"abaali",
      },
      sociallinks:["facebook", "twitter"]
     }
     //setstate with event onclick()
     plus = ()=>{
         this.setState({age: this.state.age + 1});
     }
     moins = ()=>{
        this.setState({age: this.state.age - 1});

    }
     //setstate with event onchange()
     updateName(event){
         const newName = event.target.value;
         this.setState({
                 user: {
                     ...this.state.user, //cette commande pour modifie just le nom et ne touche pas lastname 
                     name : newName,
                     
                 }
             })
     }

    render() {
        return (
            <div>
                {/*props in class*/}
                welcome {this.props.name} {this.props.lastName} from class Component
               <p>
                    name: {this.state.user.name} 
                    <br/>lastName: {this.state.user.lastname} 
                    <br/> age: {this.state.age} </p>
                    <h1> {this.state.sociallinks} </h1>
                    <button onClick={this.plus}>plus+1</button>
                    <button onClick={this.moins}>moins-1</button>
                    <input type="text" value={this.state.user.name} onChange={this.updateName.bind(this)}/>
            </div>
        )
    }
}
export default Contact;