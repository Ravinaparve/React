import { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" }
];

export default function InsertList() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  function handleInsert() {
    const insertAt = 1; //can be any index

    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt)
    ];

    setArtists(nextArtists);
    setName("");
  }

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={handleInsert}>Insert</button>

      {/* when you are creating named function, just pass the name
when you not create function and write inline funct use ()=>{}
when you want to pass arguements to your named fucntion,
 use arrow+named ie ()=>{handleClick(a)} */}

      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
