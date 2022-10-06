import "./styles.css";
import React from "react";
import { useState } from "react";
import boxes from "../src/boxes";
import Box from "../src/Box";

export default function App() {
  const [sqaures, setSqaure] = useState(boxes);

  const boxElements = sqaures.map((sqaure) => (
    <Box key={sqaure.id} on={sqaure.on} />
  ));

  return (
    <div>
      <h2>Boxes will go here....</h2>
      {boxElements}
    </div>
  );
}
