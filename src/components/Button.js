import React from 'react';

function Button (props){
    console.log(props)
        return (
            <input className="phone-btn" type="submit" onClick={() => props.logClick} value={props.logIn} />
        )
}

export default Button