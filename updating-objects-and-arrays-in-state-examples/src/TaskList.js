// this example shows adding items to the list

import { useState } from "react";

export default function TaskList() {
  const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false }
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");

  function handleAddClick() {
    setTodos([...todos, { id: todos.length + 1, title: text, done: false }]);
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
      <ul>
        {todos.map((item) => (
          <label key={item.id}>
            <input type="checkbox" />
            {item.title}{" "}
            <button
              onClick={() => setTodos(todos.filter((t) => t.id !== item.id))}
            >
              Delete
            </button>
          </label>
        ))}
      </ul>
    </>
  );
}
