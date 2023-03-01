import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex gap-2">
      <label {...props.labelInfo}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
