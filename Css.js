import React, { Component } from 'react'
import classnames from 'classnames'
import './App.css';

class Css extends Component {
    state = {
        className: 'green',

           active: true,
       
      };

      

      render() {
        
        const style={color:'white', fontWeight: 'bold'};
        const style1={};
        let classes = classnames('test', {green: 1 > 0, whiteText: 2 < 4, boldText: 8 == 8});

        if(this.state.active){
          style1.color = 'blue';
        }
        return (
          <div>
            <div className={this.state.className} style={style}>
              Test 
            </div>
            <button onClick={()=>{this.setState({className: 'red'})}}>
              change to red
            </button>
            <button onClick={()=>{this.setState({className: 'green'})}}>
              change to green
            </button>

            <div className={this.state.active ? 'green': 'red'} style={style1}>
          Test 
        </div>

        <button onClick={()=>{this.setState({active: ! this.state.active})}}>
          change active
        </button>
        <div className={classes}>
           Css with clasnames backages 
        </div>
          </div>
        );
      }
    }

export default Css;