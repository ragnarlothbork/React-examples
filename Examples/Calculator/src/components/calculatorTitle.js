//import react
import React from 'react';




//creation of functional component that takes title as props.value
const CalculatorTitle = (props) =>{
    return (<div classname="calculator-title">
        {props.value}
        </div>
        )
}


//export  the comp fun 
export default CalculatorTitle;