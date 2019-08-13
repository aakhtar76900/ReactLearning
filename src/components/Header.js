import React from "react";
const Header = props => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        <h4 className="header__subtitle">{props.subTitle}</h4>
      </div>
    </div>
  );
};
Header.defaultProps = {
  title: "App Courses!"
};
export default Header;
