import React from 'react'

 function Condbetter(props) {
    
    let auto = '';
    if (props.prix >50) {
        auto = <h4>das ist teurer</h4>;
    }
    else{
        auto = <h4>das ist billiger</h4>;
    }
    return  auto;
        
    
}
export default  Condbetter;