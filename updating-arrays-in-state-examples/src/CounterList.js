//replacing one or more items in an array
import { useState } from "react";

let initialCounters = [0, 0, 0];
export default function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrement(index) {
    const nextCounter = counters.map((c, i) => {
      //map returns new array
      if (i === index) return c + 1;
      return c;
    });
    setCounters(nextCounter); //passing new array inside set function
  }
  return (
    <>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}{" "}
          <button
            onClick={() => {
              // since we need to pass argument inside handleIncrement, we need to create anonymous function.
              handleIncrement(i);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </>
  );
}
