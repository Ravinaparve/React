import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={() => setAge(age + 1)}>Increment Age</button>

      <p>
        Hello, {name}. You are {age}.
      </p>
    </form>
  );
}
