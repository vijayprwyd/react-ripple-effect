import React from "react";
import './button.css';
import  Ripples  from "../Ripples/Ripples";

export function Button() {

    return (
        <button className="btn rippleAnimation" href="#">
            <Ripples/>
            Click Me
        </button>
    );
}