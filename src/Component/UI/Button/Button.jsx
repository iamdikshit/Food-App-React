import React from "react";

const Button = (props) => {
  return (
    <button {...props.buttonInfo} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
