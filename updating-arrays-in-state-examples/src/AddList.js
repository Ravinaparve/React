//Example 1 : Adding items to an array

// create a new array which contains the existing items and a new item at the end.

import { useState } from "react";

let nextId = 0;
export default function AddList() {
  const [name, setName] = useState("");

  const [artists, setArtists] = useState([]);
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => setArtists([...artists, { id: nextId++, name: name }])}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
