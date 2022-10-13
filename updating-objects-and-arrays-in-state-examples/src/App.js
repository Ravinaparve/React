import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import MovingDot from "./MovingDot";
import RequestTracker from "./RequestTracker";
import TaskList from "./TaskList";
import TrafficLight from "./TrafficLight";

import "./styles.css";
import Scoreboard from "./Scoreboard";

export default function App() {
  return (
    <div className="App">
      <Scoreboard />
      <hr />
      <TrafficLight />
      <hr />
      <RequestTracker />
      <hr />
      <TaskList />
      <hr />
      <MovingDot />
      <hr />
      <Form1 />
      <hr />
      <Form2 />
      <hr />
      <Form3 />
    </div>
  );
}
