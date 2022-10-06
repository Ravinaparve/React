import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

export default function FilterableProductTable(props) {
  // console.log(props);
  // console.log(props.products);
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  // The state is owned by FilterableProductTable, so only it can call setFilterText and setInStockOnly.

  //To let SearchBar update the FilterableProductTable’s state, you need to pass "setFilterText" and "setInStockOnly" down to SearchBar:
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={props.products}
      />
    </div>
  );
}
