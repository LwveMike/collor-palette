// node_modules imports
import React from 'react';


function Emoji(props){
    
   return (<span
        style={{fontSize: '24px'}}
        className="emoji"
        role="img"
    >
        {props.symbol}
    </span>);
}

export default Emoji;