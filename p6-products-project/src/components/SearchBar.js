import React from "react";

export default function SearchBar(props) {
  console.log(props);
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={(e) => props.onFilterTextChange(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={(e) => props.onInStockOnlyChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}
