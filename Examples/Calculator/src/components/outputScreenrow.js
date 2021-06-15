//import react
import React from  'react';




//fun comp used to the q&a
const OutputScreenrow =(props)=>{
    return(
        <div className="screen-row">
            <input type="text" readOnly value={props.value}/>
        </div>
    )
}




//export the fun comp
export default OutputScreenrow;