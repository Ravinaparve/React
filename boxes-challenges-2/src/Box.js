import React from "react";

export default function Box(props) {
  console.log(props.id);
  const bgColor = {
    backgroundColor: props.on ? "#222222" : "transparent"
  };

  return (
    <div
      className="box"
      style={bgColor}
      onClick={() => props.handleClick(props.id)}
    ></div>
  );
}

//summary
//instead of creating state for all the boxes (just like we did in box-challenge1,) we will make use of state that already created in App component
// the toggle function is created inside the App component and pased down to each box component
