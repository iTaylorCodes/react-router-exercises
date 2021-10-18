import React from "react";
import { useParams } from "react-router";

const Dog = ({ dogs }) => {
  const { name } = useParams();

  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  return (
    <div className="Dog">
      <img src={dog.src} alt={dog.name} />
      <h2>{dog.name}</h2>
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dog;
