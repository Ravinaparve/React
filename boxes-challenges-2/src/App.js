import "./styles.css";
import boxes from "./boxes";
import { useState } from "react";
import Box from "./Box";

export default function App() {
  const [squares, setSquares] = useState(boxes);

  function toggle(id) {
    // console.log(id);
    setSquares((prevSqaures) => {
      return prevSqaures.map((sqaure) => {
        return sqaure.id === id ? { ...sqaure, on: !sqaure.on } : sqaure;
      });
    });
  }

  const boxElements = squares.map((square) => (
    <Box id={square.id} key={square.id} on={square.on} handleClick={toggle} />
  ));

  return (
    <div className="App">
      <h2>Boxes goes here....</h2>
      {boxElements}
    </div>
  );
}
