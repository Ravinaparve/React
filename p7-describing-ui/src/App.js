//App component rendering three Profile components:

import "./styles.css";
import Profile from "./Profile.js";
import PersonInfo from "./PersonInfo.js";
import Item from "./Item";
import people from "./data";
import getImageUrl from "./utils";

export default function App() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <div>
      <section>
        {/* creating component */}
        <h3>Amazing Scientist</h3>
        <Profile />
        <Profile />
        <Profile />
      </section>

      <br />
      <PersonInfo />

      <section>
        {/* Conditional rendering */}
        <h2>Sally Ride's Packing List</h2>
        <ul>
          <Item name="Space suit" isPacked={true} />
          <Item name="Helmet with a golden leaf" isPacked={true} />
          <Item name="Photo of Tam" isPacked={false} />
        </ul>
      </section>

      <section>
        {/* Rendering List */}
        <article>
          <h1>Scientists</h1>
          <ul>{listItems}</ul>
        </article>
      </section>
    </div>
  );
}
