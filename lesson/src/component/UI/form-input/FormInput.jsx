import React from "react";
import "./FormInput.css";


function FormInput(props) {
  const { labelName, placeholder, inputType, id, ...rest } = props;
  return (
    <div>
      <label className="labelForminput" htmlFor={id}>
        {labelName}
      </label>
      <input
        className="inputForminput"
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        {...rest}
        required
      />
    </div>
  );
}
export default FormInput;
