import React from "react";
import FormSelect from "./FormSelect";

const FormInput = ({ handleChange, label, name, ...otherProps }) => {
  return (
    <div className="form-row">
      {label && <label>{label}</label>}
      <input
        className="inputForm"
        onChange={handleChange}
        name={name}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
