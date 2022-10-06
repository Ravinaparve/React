import "./styles.css";
import React from "react";
import Count from "./Count";

export default function App() {
  let [count, setState] = React.useState(0);
  let [isGoingOut, setIsGoingOut] = React.useState(true);

  function changeValue() {
    setIsGoingOut((prevValue) => !prevValue);
  }

  function add() {
    setState((prevCount) => prevCount + 1);
  }
  function subtract() {
    setState((prevCount) => prevCount - 1);
  }
  function reset() {
    setState(0);
  }

  return (
    <div className="App">
      {/* passing result from state to Count component as number props */}
      <Count number={count} />

      <button onClick={add}>+1</button>
      <button onClick={subtract}>-1</button>
      <button onClick={reset}>0</button>

      {/* <hr />
      <h3>Is going out?</h3>
      <button onClick={changeValue}>Change it</button>
      <p>{isGoingOut ? "Yes" : "No"}</p> */}
    </div>
  );
}
