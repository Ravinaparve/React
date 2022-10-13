import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
  { id: 3, title: "Solar System" }
];

export default function ReverseList() {
  const [lists, setList] = useState(initialList);
  function handleReverse() {
    // reverse() and sort() methods can mutate the original array,
    // so copy the array first, and then make changes to it.
    const reversedList = [...lists].reverse();
    //[...lists] spread syntax to create a copy of the original array first.
    setList(reversedList);
  }
  return (
    <>
      <button onClick={handleReverse}>Reverse</button>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>{list.title}</li>
        ))}
      </ul>
    </>
  );
}
