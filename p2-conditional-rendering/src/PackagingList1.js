import React from "react";
import Item1 from "./Item1";

export default function PackagingList() {
  return (
    <div>
      <h3>Sally Ride's Packing List 1</h3>
      <ul>
        <Item1 isPacked={true} name="Space suit" />
        <Item1 isPacked={true} name="Helmet with a golden leaf" />
        <Item1 isPacked={false} name="Photo of Tam" />
      </ul>
    </div>
  );
}
