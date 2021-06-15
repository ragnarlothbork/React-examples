//import react
import React from  'react';
//importing existing outputScreenrow
import OutputScreenrow from './outputScreenrow.js';

//fun comp used to hold  the 2 screens rows
const OutputScreen=(props)=>{
    return(
        <div className="screen">
            <OutputScreenrow value={props.question}/>
            <OutputScreenrow value={props.answer}/>
        </div>
    )
}



//export fun component
export default OutputScreen;