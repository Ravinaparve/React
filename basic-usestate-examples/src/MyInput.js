import { useState } from "react";

export default function MyInput() {
  const [text, setText] = useState("hello");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleTextChange} />
      <h3>You typed : {text} </h3>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}
