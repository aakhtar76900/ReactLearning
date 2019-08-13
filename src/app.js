import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const template = (
  <div>
    <IndecisionApp />
  </div>
);


ReactDOM.render(template, document.getElementById("app"));
