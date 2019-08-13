import React from 'react';

const Option = props => {
    return (
      <div className="option">
        <p className="option__text">{props.option}</p>
        <button
          className="button button--link"
          onClick={() => {
            props.removeOption(props.option);
          }}
        >
          Remove
        </button>
      </div>
    );
  };

  export default Option;