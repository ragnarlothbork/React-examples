// import React 
import React from 'react';
  
// create our Button component 
const Button = (props) => {
  return (
    <input
      type="button"
      value={props.label}
      onClick = {props.handleClick}
    />
  );
}
  


// export fun component.
export default Button;