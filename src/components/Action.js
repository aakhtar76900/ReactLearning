import React from 'react';

  const Action = props => {
    return (
      <div>
        <button disabled={!props.isEnabled} onClick={props.handleWhatToDo}>
          What Should I Do?
        </button>
      </div>
    );
  };

  export default Action;