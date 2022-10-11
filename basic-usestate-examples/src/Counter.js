// In this example, the count state variable holds a number.

// Clicking the button increments it.

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return <button onClick={handleClick}>you clicked {count} times</button>;
}
