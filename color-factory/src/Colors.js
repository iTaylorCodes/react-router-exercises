import React from "react";
import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
  const colorList = colors.map((c) => {
    return (
      <div>
        <Link to={`/colors/${c.colorName}`} style={{ color: c.colorValue }}>
          {c.colorName}
        </Link>
      </div>
    );
  });
  return (
    <div className="Colors">
      <div
        style={{ padding: "20px", backgroundColor: "black", color: "white" }}
      >
        <h1>Colors</h1>
        <Link to="/colors/new" style={{ color: "white" }}>
          Add a new color
        </Link>
      </div>
      <div>{colorList}</div>
    </div>
  );
};

export default Colors;
