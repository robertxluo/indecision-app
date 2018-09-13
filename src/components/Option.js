import React from 'react';

const Option = (props) => (
    <div className="option">
        {props.optionText}
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>
);

export default Option;