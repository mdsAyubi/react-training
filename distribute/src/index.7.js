import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/06PropValidation/app";

ReactDOM.render(
  <App accept={true} title={"123"} days={12} />,
  document.querySelector(".container")
);
