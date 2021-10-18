import React from "react";
import { Link } from "react-router-dom";

const Dogs = ({ dogs }) => {
  return (
    <div className="Dogs">
      <h1>Here are our dogs. Click one for more info!</h1>
      {dogs.map((dog) => {
        return (
          <div key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              <img src={dog.src} alt={dog.name} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Dogs;
