import React, { Component } from 'react'

 class ForbyOneMethod extends Component {
    state={
    value : "ForbyOneMethod",
    valuetextarea : "ForbyOneMethod",
    value1:"2",
    checked:true,
    radiovalue:"2"
    }
    // Forms by one method - Controlled components
    setvalue=(event)=>{
        const name = event.target.name; 
        const type = event.target.type;
        let value='';

        if(type == "checkbox")
        value = event.target.checked;
        
        else
        value = event.target.value;
        
        this.setState({
            [name]:value
        });
    }
    
    render() {
        return (
            <div>
                <input name="value" value={this.state.value} onChange={this.setvalue}/>
                
                <textarea name ="valuetextarea"value={this.state.valuetextarea} onChange={this.setvalue}/><br/><br/>
                
                <select name ="value1" value={this.state.value1} onChange={this.setvalue}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">three</option>
                </select><br/><br/>
                Checkbox ForbyOneMethod
                <input name ="checked" type="checkbox" checked={this.state.checked} onChange={this.setvalue}/>
                

                <div onChange={this.setvalue}>
                <input   name ="radiovalue" type="radio" value="1"   checked={this.state.radiovalue == "1"}/>One
                <input   name ="radiovalue" type="radio" value="2"   checked={this.state.radiovalue == "2"}/>Two
                     </div>
            </div>
        )
    }
}
export default ForbyOneMethod;
