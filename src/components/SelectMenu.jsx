import React from "react";

export default function SelectMenu({
  label,
  id,
  name,
  value,
  onChange,
  error,
  option,
  defaultOption,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}
        {option.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}
