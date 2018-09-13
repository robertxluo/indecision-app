import React from 'react';

const Option = (props) => (
    <div className="option">
        <ol>
            <li className="option__text">{props.optionText}</li>
        </ol>
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