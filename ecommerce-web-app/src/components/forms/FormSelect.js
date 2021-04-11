import React from "react";

const FormSelect = ({
  options,
  defaultvalue,
  handleChange,
  label,
  ...otherprops
}) => {
  if (!Array.isArray(options) || options.length < 1) {
    return null;
  }

  return (
    <div className="form-row">
      {label && <label>{label}</label>}

      <select
        className="formSelect"
        {...otherprops}
        value={defaultvalue}
        onChange={handleChange}
      >
        {options.map((option, index) => {
          const { name, value } = option;
          return <option key={index}>{name}</option>;
        })}
      </select>
    </div>
  );
};

export default FormSelect;
