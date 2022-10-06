import React from "react";

export default function ProductCategoryRow({ category }) {
  // console.log();
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}
