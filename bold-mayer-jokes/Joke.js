import React from "react";

function Joke(props) {
  return (
    <div className="jokeCard">
      {props.setup && <h3>{props.setup}</h3>}

      <p>{props.puchline}</p>
    </div>
  );
}
export default Joke;
