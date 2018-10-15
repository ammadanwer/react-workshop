import React from 'react';
import PropTypes from 'prop-types';
const dropdown_internal = props => props.countries.map((country, index) =>
    <option key={index} value={country}>{country}</option>
)

const DropDown = (props) => (
    <fieldset><label><strong>{props.title}</strong></label><select name={props.name} onChange={props.eventHandler}>{dropdown_internal(props)}</select></fieldset>
);

DropDown.propTypes = {
    title: PropTypes.string.isRequired,
}

export default DropDown;