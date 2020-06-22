import React, {Component} from 'react';
import Contact from   './component/Contact';
import Navbar from './component/Navbar';
import Listes from './component/listes';
import Condional from './component/condional';
import LifeCycle from './component/LifeCycle';
import Condbetter from './component/cond&loop/Condbetter';
import Loop from './component/cond&loop/loop'; 
import Todolist_app from './component/Todolist app';
import Forms from './component/Forms/Forms';
import ForbyOneMethod from './component/Forms/FormbyOneMethod';
import Formik from './component/Formik/Formik';




import './App.css';



function App() {
  return (
    <div className="App">
      welcome
      <Navbar name="Mehdi"  lastName="Abaali">
        
        descreption
      
      </Navbar>
      <Navbar name="fahmi"  lastName="foulan">
        
        descreption
      
      </Navbar><br/><br/><br/>
      
     <Contact name="Mehdi" lastName="Abaali" ><br/><br/>
      </Contact><hr></hr>
      <Listes/><hr></hr>
      <Condional /><hr></hr>
      <LifeCycle/><hr></hr>
      <Condbetter prix={10}/><hr></hr>
      <Loop/><hr></hr>
      
      <Todolist_app/><hr></hr>
      <Forms/><hr></hr><br/><br/>
      <ForbyOneMethod/><hr></hr><br/><br/>
      <Formik/>

       
    </div>
  );
}

export default App;
