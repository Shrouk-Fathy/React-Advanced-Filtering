import React from "react";

export default function Input({ handleRadioInput, value, name, title }) {
  const handleInputChange = (e) => {
    document.querySelectorAll("button").forEach((btn) => btn.classList.remove("clicked"));
    handleRadioInput(e);
  };

  return (
    <label className="sidebar-label-container">
      <input
        type="radio"
        name={name}
        onChange={handleInputChange}
        value={value}
      />
      <span className="checkmark"></span>
      {title}
    </label>
  );
}