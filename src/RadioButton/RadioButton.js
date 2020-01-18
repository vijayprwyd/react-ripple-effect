import React from "react";
import "./radiobutton.css";
import Ripples from "../Ripples/Ripples";

export function RadioButton({name, children}) {
    return (
        <label>
            <span className="span1 container rippleAnimation">
                <Ripples>
                    <input type="radio" className="check" name={name}></input>
                    <span className="checkmark"></span>
                </Ripples>
            </span>
            <span className="span-label">{children}</span>
        </label>
    );
}
