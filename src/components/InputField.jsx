import React from "react";

export default function InputField({
  id,
  name,
  value,
  label,
  error,
  onChange,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className="error">{error}</p>
    </div>
  );
}
