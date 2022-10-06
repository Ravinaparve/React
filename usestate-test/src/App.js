import "./styles.css";
import React from "react";

export default function App() {
  let [count, setState] = React.useState(0);
  let [isGoingOut, setIsGoingOut] = React.useState(true);

  function changeValue() {
    setIsGoingOut((prevValue) => !prevValue);
  }

  function increase() {
    setState((prevCount) => prevCount + 1);
  }
  function decrease() {
    setState((prevCount) => prevCount - 1);
  }
  function reset() {
    setState(0);
  }

  return (
    <div className="App">
      <h3>{count}</h3>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={reset}>0</button>
      <hr />
      <h3>Is going out?</h3>
      <button onClick={changeValue}>Change it</button>
      <p>{isGoingOut ? "Yes" : "No"}</p>
    </div>
  );
}
