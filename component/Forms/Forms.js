import React, { Component } from 'react'

 class Forms extends Component {
    state={
    value : "Deafult",
    valuetextarea : "textarea",
    value1:"2",
    checked:true,
    radiovalue:"2"
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
    //Forms - Radio 
    setradiovalue=(event)=>{
        this.setState({
            radiovalue:event.target.value
        });
    }
    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.setvalue}/>
                
                <textarea value={this.state.valuetextarea} onChange={this.settextareavalue}/>
                <select value={this.state.value1} onChange={this.setselectvalue}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">three</option>
                </select>
                Checkbox<input type="checkbox" checked={this.state.checked} onChange={this.setchecked}/>

                <div onChange={this.setradiovalue}>
                <input type="radio" value="1"   checked={this.state.radiovalue == "1"}/>One
                <input type="radio" value="2"   checked={this.state.radiovalue == "2"}/>Two
                     </div>
            </div>
        )
    }
}
export default Forms;
