import "./styles.css";
import React from "react";
import Joke from "../Joke";
import jokesData from "../jokesData";

function App() {
  console.log(jokesData);

  const jokeElement = jokesData.map((joke) => (
    <Joke key={joke.id} setup={joke.question} puchline={joke.answer} />
  ));

  return <div>{jokeElement}</div>;
}

export default App;
