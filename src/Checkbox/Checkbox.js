import React from "react";
import './checkbox.css';
import Ripples from "../Ripples/Ripples";

export function Checkbox({children}) {
    return (
        <label className = "check-option">
        <span className="span1 container rippleAnimation">
            <Ripples>
            <input type="checkbox" className="check"></input>
            <span className="checkbox">

            </span>


            </Ripples>
        </span>
        <span className="span-label">{children}</span>
    </label>

    )
}