import React from "react";
import { useParams } from "react-router";
import { Link, Redirect } from "react-router-dom";

const Color = ({ colors }) => {
  const { color } = useParams();

  const foundColor = colors.find(
    (c) => c.colorName.toLowerCase() === color.toLowerCase()
  );

  if (!foundColor) return <Redirect to="/colors" />;

  return (
    <div
      className="Color"
      style={{ backgroundColor: foundColor.colorValue, color: "white" }}
    >
      <h1>This is {foundColor.colorName}!</h1>
      <Link to="/colors">Go Back</Link>
    </div>
  );
};

export default Color;
