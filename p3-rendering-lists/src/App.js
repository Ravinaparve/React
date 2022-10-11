import List from "./List";
import Poem from "./Poem";
import RecipeList from "./RecipeList";
import SculptureList from "./SculptureList";
import "./styles.css";

export default function App() {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 }
  ];

  const peopleNames = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist"
  ];

  const listNames = peopleNames.map((person) => <li key={person}>{person}</li>);

  const listItems = products.map((item) => (
    <li key={item.id} style={{ color: item.isFruit ? "magenta" : "green" }}>
      {item.title}
    </li>
  ));

  return (
    <div>
      <p>list of peoples names:</p>
      <ul>{listNames}</ul>

      <p>list of product items:</p>
      <ul>{listItems}</ul>

      <p>below explains filter() method</p>
      <List />

      <h1>Receipes</h1>
      <RecipeList />

      <h2>A Peom</h2>
      <Poem />

      <div className="sculpture">
        <h2>Sculptures Information</h2>
        <SculptureList />
      </div>
    </div>
  );
}
