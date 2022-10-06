import React from "react";

////challenge 2:
//. Use the && operator to render ”(Importance: X)” in italics, but only for items that have non-zero importance.

//Note that you must write importance > 0 && ... rather than importance && ... so that if the importance is 0, 0 isn’t rendered as the result!

export default function Item2({ name, importance }) {
  return (
    <li>
      {name}
      {importance <= 0 && " "}
      {importance > 0 && <i>(Importance: {importance})</i>}
    </li>
  );
}

//Note:
//Don’t put numbers on the left side of &&.

//To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.
