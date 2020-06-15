import React from 'react'
//props
 function Navbar(props) {
    
    return (
        <div>
            {/*props in function*/}
            welcome {props.name +' '+ props.lastName} from function component <br></br>
           {props.children}
        </div>
    )
}
export default Navbar;