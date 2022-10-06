import "./styles.css";
import MyButtton from "./MyButton";

export default function App() {
  return (
    <div>
      <h3>Counters that update separately</h3>
      <MyButtton />
      <MyButtton />
    </div>
  );
}
// If you render the same component multiple times, each will get its own state. Try clicking each button separately:
//each button “remembers” its own count state and doesn’t affect other buttons.
