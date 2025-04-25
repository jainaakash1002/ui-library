// src/input/AakashInput.js
import React from "react";

const AakashInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
      }}
    />
  );
};

export default AakashInput; // Default export
