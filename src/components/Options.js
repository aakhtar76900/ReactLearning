import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <div>
      <button onClick={props.removeAll}>Remove All</button>

      {props.options.map(item => {
        return (
          <Option removeOption={props.removeOption} key={item} option={item} />
        );
      })}
    </div>
  );
};

export default Options;
