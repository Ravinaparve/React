import React from "react";
import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>clicked {count} times</button>
      {/* <input type="button" value="reset" onClick={() => setCount(0)} /> */}
    </>
  );
}
