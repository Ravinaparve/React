import React from "react";
import { useState } from "react";

export default function Box(props) {
  // console.log(props.on);

  const [on, setOn] = useState(props.on);
  const bgColor = { backgroundColor: on ? "#222222" : "transparent" };

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return <div className="box" style={bgColor} onClick={toggle}></div>;
}
//Summary
//creating state in each child component and initialising that state based on the incoming prop
//when we create state in chile component based on incoming prop, it is called Derived State

//but you dont need the derived state nowadays. there is a better way of doing it
//see boxeschallenges2
