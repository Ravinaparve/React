import React from "react";
import { data } from "./data";

export default function List() {
  //steps to filter:
  //1.  Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist':

  const chemists = data.filter((item) => item.profession === "chemist");

  const everyoneElse = data.filter((item) => item.profession !== "chemist");

  //2.Now map over chemists:
  const chemistList = chemists.map((chemist) => (
    <li key={chemist.id} className="flex">
      <img alt={chemist.name} src={chemist.imageId} />
      <p>
        <b>{chemist.name}</b>
        {" " + chemist.profession + " "} known for {chemist.accomplishment}
      </p>
    </li>
  ));

  //2.Now map over everyone else:
  const everyOneElseList = everyoneElse.map((person) => (
    <li key={person.id} className="flex">
      <img src={person.imageId} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "} known for {person.accomplishment}
      </p>
    </li>
  ));

  //3. Lastly, return the listItems from the component:
  return (
    <article>
      <h1>Scientists</h1>

      <h2>Chemists</h2>
      <ul>{chemistList}</ul>
      <br />
      <h2>EveryOne Else</h2>
      <ul>{everyOneElseList}</ul>
    </article>
  );
}
