import React from 'react';
import PropTypes from 'prop-types';

const radiobutton_internal = props => props.radiob.map((rad, index) =>
        <div key={index}>
            <input key={rad} type="radio" onChange={props.eventHandler} name={props.name} value={rad}/>{rad}
        </div>
    )

const RadioButtons = (props) => (

    <fieldset><label><strong>{props.title}</strong></label><br/>{radiobutton_internal(props)}</fieldset>
);

RadioButtons.propTypes = {
    title: PropTypes.string.isRequired,
}

export default RadioButtons;