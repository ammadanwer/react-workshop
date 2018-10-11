import {Component} from "react";
import React from "react";
import BoilingNotice from "./BoilingNotice";

const FormHolder = ({label, temp_value, handler}) => {
    return (
        <div>
            <label>Enter Temperature in {label}</label>
            <input
                type="number"
                placeholder={`Enter value in ${label}`}
                value={temp_value}
                onChange={handler}
            />
        </div>
    );
};

export default FormHolder;