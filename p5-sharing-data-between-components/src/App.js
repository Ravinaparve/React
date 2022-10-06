import "./styles.css";
import { useState } from "react";
import MyButton from "./MyButton";

export default function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  return (
    <div>
      <MyButton handleClick={increase} count={count} />
      <MyButton handleClick={increase} count={count} />
    </div>
  );
}

// To make both "MyButton" components display the same "count" and update together, you need to move the state from the individual buttons “upwards” to the closest component containing all of them.

//The new count value is passed as a prop to each button, so they all show the new value.

//This is called “lifting state up”. By moving state up, we’ve shared it between components.
