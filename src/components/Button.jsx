import React from 'react';
import './button.css';

const isAnOpeartor = val =>{
    return !isNaN(val) || val === "." || val === "=";
}

 const button = (props) => (
    <div className = {`button-wrapper ${isAnOpeartor(props.children) ? null : "operator"}`}>
        {props.children}
    </div>
);

export default button;
