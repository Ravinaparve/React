import { useState } from "react";

//Here is a crosswalk light component that toggles on when the button is pressed:
export default function TrafficLight() {
  const [walk, setWalk] = useState(true);
  function handleChange() {
    setWalk(!walk);
  }
  return (
    <>
      <button onClick={handleChange}>Change to {walk ? "stop" : "walk"}</button>
      <h3 style={{ color: walk ? "darkgreen" : "darkred" }}>
        {walk ? "walk" : "stop"}
      </h3>
    </>
  );
}
