import React from 'react';
import PropTypes from 'prop-types';
const checkbox_internal = props => props.checkboxes.map((checkbox, index) =>
        <div key={checkbox}>
            <input type="checkbox" onChange={props.eventHandler} name={props.name} value={checkbox}/>{checkbox}
        </div>
    )

const Checkboxes = (props) => (
    <fieldset><label><strong>{props.title}</strong></label><br/>{checkbox_internal(props)}</fieldset>
);

Checkboxes.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Checkboxes;