import React, { Component } from 'react'

 class Forms extends Component {
    state={
    value : "Deafult"
    }
    setvalue=(event)=>{
        this.setState({
            value:event.target.value
        });
    }
    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.setvalue}/>
          <hr></hr>
                <textarea value={this.state.value} onChange={this.setvalue}></textarea>
            </div>
        )
    }
}
export default Forms;