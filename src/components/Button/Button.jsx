import React from "react";
import "./Button.modul.css";

const Button = (props) => {
    return (
        <button {...props} className={"button " + props.className}>
            {props.buttonText}
        </button>
    );
};

export default Button;
