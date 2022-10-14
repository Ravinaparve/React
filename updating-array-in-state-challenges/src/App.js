import ShoppingCart from "./ShoppingCart";
import "./styles.css";
import TaskApp from "./TaskApp";

export default function App() {
  return (
    <div className="App">
      <TaskApp />
      <br />
      <hr />
      <ShoppingCart />
    </div>
  );
}
