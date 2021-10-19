import React from "react";
import { Link } from "react-router-dom";

const ColorForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form className="ColorForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="colorName">Color name</label>
        <input
          type="text"
          name="colorName"
          id="colorName"
          value={formData.colorName}
          placeholder="Name of color"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="colorValue">Color Value</label>
        <input
          type="color"
          name="colorValue"
          id="colorValue"
          value={formData.colorValue}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      <div>
        <Link to="/colors">Go Back</Link>
      </div>
    </form>
  );
};

export default ColorForm;
