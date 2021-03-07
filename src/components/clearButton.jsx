import React from 'react'
import './clearButton.css'
export const clearButton = (props) => (
<div className="clear-btn" onClick={props.handleClear}>
    {props.children}
</div>
);
