import React, { Component } from 'react'

 class Forms extends Component {
    state={
    value : "Deafult",
    valuetextarea : "textarea",
    value1:"2",
    checked:true
    }
    // Forms - Controlled components
    setvalue=(event)=>{
        this.setState({
            value:event.target.value
        });
    }
    //Forms - Textarea
    settextareavalue=(event)=>{
        this.setState({
            valuetextarea: event.target.value
        });
    }
    //Forms - Select
    setselectvalue=(event)=>{
        this.setState({
            value1:event.target.value
        });
    }
    //Forms - Checkbox
    setchecked=(event)=>{
        this.setState({
            checked:event.target.checked
        });
    }
    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.setvalue}/>
                <hr></hr>
                <textarea value={this.state.valuetextarea} onChange={this.settextareavalue}/>
                <hr></hr>
                <select value={this.state.value1} onChange={this.setselectvalue}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">three</option>
                </select><hr></hr>
                Checkbox<input type="checkbox" checked={this.state.checked} onChange={this.setchecked}/>
            </div>
        )
    }
}
export default Forms;
