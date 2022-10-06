import "./styles.css";
import FilterableProductTable from "../src/components/FilterableProductTable";
import productData from "./productData";

export default function App() {
  return (
    <>
      <FilterableProductTable products={productData} />
    </>
  );
}
