import React from "react";

export default function Recipe({ id, name, ingredients }) {
  return (
    <>
      <h3>{name}</h3>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ol>
    </>
  );
}
