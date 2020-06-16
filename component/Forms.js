import React, { Component } from 'react'

 class Forms extends Component {
    state={
    value : "Deafult",
    value1:"2"
    }
    setvalue=(event)=>{
        this.setState({
            value:event.target.value
        });
    }
    setselectvalue=(event)=>{
        this.setState({
            value1:event.target.value
        });
    }
    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.setvalue}/>
                <hr></hr>
                <textarea value={this.state.value} onChange={this.setvalue}></textarea>
                <hr></hr>
                <select value={this.state.value1} onChange={this.setselectvalue}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">three</option>
                </select>
            </div>
        )
    }
}
export default Forms;
