//Passing JSX and dynamic data to component

import React from "react";

export default function PersonInfo() {
  const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "pink"
    }
  };
  return (
    <div className="personInfo" style={person.theme}>
      <h2>{person.name}'s ToDo</h2>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
