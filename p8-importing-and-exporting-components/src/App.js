import "./styles.css";
import { Profile } from "./Gallery"; //named import
import Gallery from "./Gallery"; //default import

export default function App() {
  return (
    <div>
      <h3>Importing only 1 profile in app.js</h3>
      <Profile />

      <hr />

      <h3>Importing gallery with profiles</h3>
      <Gallery />
    </div>
  );
}

//Explanation:

//Now Gallery.js contains two exports: a default Gallery export, and a named Profile export. App.js imports both of them.

//Try editing <Profile /> to <Gallery /> and back in this example:
