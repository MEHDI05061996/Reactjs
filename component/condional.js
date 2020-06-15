import React from 'react'

 function Condional() {
    
    //condition with javascript
    const prix =150;
    let auto = '';
    if (prix >100) {
        auto = <h4>das ist teurer</h4>;
    }
    else{
        auto = <h4>das ist billiger</h4>;
    }
//loops print array
    let users= [
        {id:1, name:"mehdi", lastname:"abaali"},
        {id:2, name:"SAAD", lastname:"ABAALI"},
        {id:3, name:"ihsan", lastname:"ELHARCHY"},
    ];
    //condition with jsx
    const age = 20; 
    return (
        <div>
            {/*print condition jsx*/}
            {
            age > 15 ? 
            <h4>this is older than 15</h4>: 
            <h4>this smaller than 15</h4>
            }


        {
         age > 22 ? 
         <h4>this is younger than 15</h4>: 
         null
         }

        {/*print condition javascript*/}
          {auto}

       {/*print array*/}
          <ul>
        {users.map(user =>  <li key={user.id}>{user.id} {user.name} {user.lastname} </li>,
        )}
        
        </ul>
        </div>

         
         
     
    )
}
export default Condional;