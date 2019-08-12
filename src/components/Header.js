import React from "react";
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>{props.subTitle}</h4>
    </div>
  );
};
Header.defaultProps = {
  title: "App Courses!"
};
export default Header;
