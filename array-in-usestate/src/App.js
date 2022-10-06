import React from "react";
import "./styles.css";

//Add elements
export default function App() {
  //array in state
  const [arr, setArr] = React.useState(["thing1", "thing2"]);

  //add elements in array
  function handleItems() {
    setArr((prevState) => {
      return [...prevState, `thing${prevState.length + 1}`];
    });
  }

  // to display it on UI map over the array
  const arrElement = arr.map((item) => <p key={item}>{item}</p>);

  return (
    <div>
      <button onClick={handleItems}>Add Items</button>
      {arrElement}
    </div>
  );
}
