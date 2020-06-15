import React, { Component } from 'react'

 class Todolist_app extends Component {
   newTask='';
   state = {
    Todos :[
        {text:'lern react js'},
        {text:'lern node js'},
        {text:'lern vue js'},
        {text:'lern angularjs'},
      ]
     }

     completTask = (index)=>{
       const Todos = [...this.state.Todos];
       Todos.splice(index , 1);
       this.setState({
         Todos
       });
      }

      updateNewTask = (event)=>{
        this.setState({
          newTask: event.target.value
        });
      }

  addTask = ()=>{
    const Todos = [...this.state.Todos];
    Todos.push({
      text: this.state.newTask
    });
    this.setState({
      Todos,
      newTask:''
    });
  }
    render() {
        return (
            <div>
       {this.state.Todos.map((todo,index) =>
              <li key={index}>{todo.text} 
              <button onClick={()=>{this. completTask(index)}}>DONE</button>
                </li>)}
                <input value={this.state.newTask} onChange={this.updateNewTask}/>
                <button onClick={this.addTask}>add text</button>
            </div>
        )
    }
}
export default Todolist_app;