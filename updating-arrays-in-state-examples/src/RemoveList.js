//Example 2 : removing items from array

//to remove an item from an array is to filter it out.
//In other words, you will produce a new array that will not contain that item.

import { useState } from "react";

let initialpainters = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" }
];

export default function RemoveList() {
  const [painters, setPainter] = useState(initialpainters);

  //Method 1 : creatidng a seperate function
  function handleDeleteClick(painterId) {
    setPainter(painters.filter((p) => p.id !== painterId));
  }
  return (
    <>
      <h4>Inspiring Painters</h4>
      <ul>
        {painters.map((painter) => (
          <li key={painter.id}>
            {painter.name}
            {/*  Method 2 : inline event handler*/}
            {/* <button
              onClick={() =>
                setPainter(painters.filter((p) => p.id !== painter.id))
              }
            > */}
            <button onClick={() => handleDeleteClick(painter.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

//Here, artists.filter(a => a.id !== artist.id) means “create an array that consists of those artists whose IDs are different from artist.id”. In other words, each artist’s “Delete” button will filter that artist out of the array, and then request a re-render with the resulting array. Note that filter does not modify the original array.
