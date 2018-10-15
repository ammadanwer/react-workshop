import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => (
        <fieldset>
        <label><strong>{props.title}</strong></label>
        <input
            name={props.name}
            className="form-input"
            placeholder={props.placeholder}
            onChange={props.eventHandler}
        />
        </fieldset>
);

TextInput.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default TextInput;