import React from "react";
import "./form-input.scss";

const FormInput = ({ displayName, name, type, value, onChangeFunc }) => {
  return (
    <div className="form-input_container">
      <label htmlFor={displayName}>{name}</label>
      <input
        value={value}
        name={displayName}
        type={type}
        className="form-input"
        onChange={onChangeFunc}
        required
      />
    </div>
  );
};

export default FormInput;
