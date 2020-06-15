import React from 'react'

export default function Loop(props) {
    let users= [
        {id:1, name:"mehdi", lastname:"abaali"},
        {id:2, name:"SAAD", lastname:"ABAALI"},
        {id:3, name:"ihsan", lastname:"ELHARCHY"},
    ];

    let user1= [
        {id:1, name:"fhdi", lastname:"li"},
        {id:2, name:"mAAD", lastname:"ALI"},
        
    ];
    return (
        <div>
             {/*print array*/}
          <ul>
        {users.map(user =>  <li key={user.id}>{user.id} {user.name} {user.lastname} </li>,
        )}
        
        </ul>

        <ul>
        {user1.map(user =>  <li key={user.id}>{user.id} {user.name} {user.lastname} </li>,
        )}
        
        </ul>
        </div>
    )
}
