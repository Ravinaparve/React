import React from "react";
//different ways to render condititonally
export default function Item1({ name, isPacked }) {
  //method1:
  //return <li>{isPacked ? <del>{name + " ✔"}</del> : name}</li>;

  //method2: (recommended)
  let itemContent = name;
  if (isPacked) {
    itemContent = name + "✔";
  }
  return (
    <li>{itemContent}</li>

    //Method 3: (recommended)
    //“if isPacked is true, then (&&) render the checkmark, otherwise,
    //render nothing”
    // <li>
    //   {name} {isPacked && "✔"}
    // </li>
  );
}
