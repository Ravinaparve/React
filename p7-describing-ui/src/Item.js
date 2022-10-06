import React from "react";

//Conditional rendering
// the JavaScript && operator is used to conditionally render a checkmark:
export default function Item({ name, isPacked }) {
  return (
    <>
      <li>
        {name}
        {isPacked && "✔"}
      </li>
    </>
  );
}
