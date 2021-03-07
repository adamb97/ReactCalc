import React from 'react';
import './button.css';

const isAnOpeartor = val =>{
    return !isNaN(val) || val === "." || val === "=";
}

 const Button = (props) => (
    <div className = {`button-wrapper ${isAnOpeartor(props.children) ? null : "operator"}`} onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
);

export default Button;
