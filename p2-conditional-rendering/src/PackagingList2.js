import React from "react";
import Item2 from "./Item2";
//challenge 2:
//. Use the && operator to render ”(Importance: X)” in italics, but only for items that have non-zero importance.

export default function PackagingList() {
  return (
    <div>
      <h3>Sally Ride's Packing List 2</h3>
      <ul>
        <Item2 importance={9} name="Charger & Batteries" />
        <Item2 importance={0} name="Straw Hat" />
        <Item2 importance={6} name="Leather Jacket" />
      </ul>
    </div>
  );
}
