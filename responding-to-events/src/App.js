import "./styles.css";
import AlertButton from "./AlertButton";
import Slider from "./Slider";

import Toolbar from "./Toolbar";
import Signup from "./Signup";

export default function App() {
  return (
    <section className="App">
      <p>Example 1: Reading props in event handlers example</p>
      <div>
        <AlertButton message="Playing!">Play Movie</AlertButton>
        <AlertButton message="uploading!">Upload Image</AlertButton>
      </div>
      <hr />

      <p>Example 2 : Passing event handlers as props Example:</p>
      <Toolbar />
      <hr />

      <p>Example 3 : event propogation & Stopping propagation </p>
      <Slider />
      <hr />

      <p>
        Example 4 : Preventing default behavior using <b>e.preventDefault()</b>
      </p>
      <Signup />
      <hr />
    </section>
  );
}
