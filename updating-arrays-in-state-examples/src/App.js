import "./styles.css";
import AddList from "./AddList";
import RemoveList from "./RemoveList";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import InsertList from "./InsertList";
import ReverseList from "./ReverseList";
import BucketList from "./BucketList";

export default function App() {
  return (
    <div className="App">
      <AddList />
      <hr />
      <RemoveList />
      <br />
      <hr />
      <InsertList />
      <hr />
      <ReverseList />
      <br />
      <hr />
      <BucketList />
      <hr />
      <CounterList />
      <hr />
      <ShapeEditor />
    </div>
  );
}
