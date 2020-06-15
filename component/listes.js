import React from 'react'

function Listes(props) {
    
const fruit =["appel","oraange","banan"];

    return (
        <div>
        <ul>
         {fruit.map(item => <li key={item}>{item}</li>)}
        </ul>
        </div>
    )
}
export default Listes;