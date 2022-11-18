import React from "react";

const Button = (props) => {
  return (
    <button className="Button" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export { Button };
